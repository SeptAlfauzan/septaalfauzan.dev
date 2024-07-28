import { NextResponse } from "next/server";
import { promisify } from "util";
import { pipeline } from "stream";
const pump = promisify(pipeline);
import ImageKit from "imagekit";
import ImageKitHelper from "@/app/helper/imagekit";
import PrismaHelper from "@/app/helper/prisma";
import { PrismaClient } from "@prisma/client";
import { create } from "domain";

export async function GET() {
  return NextResponse.json({
    hello: "hello from projects API",
  });
}

export async function POST(req: Request, res: Response) {
  try {
    const formData = await req.formData();

    const bannerImg = formData.getAll("banner_img")[0] as File;
    const img = formData.getAll("img")[0] as File;
    const imageKit = ImageKitHelper.getInstance();

    const bannerResult = await imageKit.uploadImage(bannerImg);
    const imgResult = await imageKit.uploadImage(img);

    const dateString = "2023-07-28T12:34:56Z";

    const prismaHelper: PrismaHelper = PrismaHelper.getInstance();

    const result = await prismaHelper.getPrismaClient().project.create({
      data: {
        startedAt: new Date(dateString),
        finishedAt: new Date(dateString),
        title: formData.get("title") as string,
        desc: formData.get("desc") as string,
        images: {
          create: [
            {
              url: bannerResult.url,
            },
            {
              url: imgResult.url,
            },
          ],
        },
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", message: e });
  }
}
