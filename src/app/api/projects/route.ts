import { NextResponse } from "next/server";
// import { pipeline } from "stream";
// import { promisify } from "util";
// const pump = promisify(pipeline);

export async function GET() {
  // const prismaHelper: PrismaHelper = PrismaHelper.getInstance();
  // const result = await prismaHelper.getPrismaClient().project.findMany({
  //   include: {
  //     images: true,
  //   },
  // });

  return NextResponse.json({
    data: "result",
  });
}

// export async function POST(req: Request, res: Response) {
//   try {
//     const formData = await req.formData();

//     const bannerImg = formData.getAll("banner_img")[0] as File;
//     const img = formData.getAll("img")[0] as File;
//     const imageKit = ImageKitHelper.getInstance();

//     const bannerResult = await imageKit.uploadImage(bannerImg);
//     const imgResult = await imageKit.uploadImage(img);

//     const dateString = "2023-07-28T12:34:56Z";

//     const prismaHelper: PrismaHelper = PrismaHelper.getInstance();

//     const result = await prismaHelper.getPrismaClient().project.create({
//       data: {
//         startedAt: new Date(dateString),
//         finishedAt: new Date(dateString),
//         title: formData.get("title") as string,
//         desc: formData.get("desc") as string,
//         images: {
//           create: [
//             {
//               url: bannerResult.url,
//             },
//             {
//               url: imgResult.url,
//             },
//           ],
//         },
//       },
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", message: e });
//   }
// }
