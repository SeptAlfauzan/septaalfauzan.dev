import { PrismaClient } from "@prisma/client";

const env = process.env;

export default class PrismaHelper {
  private static instance: PrismaHelper;
  private prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): PrismaHelper {
    if (!PrismaHelper.instance) {
      PrismaHelper.instance = new PrismaHelper();
    }

    return PrismaHelper.instance;
  }

  public getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}
