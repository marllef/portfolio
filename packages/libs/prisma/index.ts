import { PrismaClient } from "@prisma/client";

export * from "prisma/prisma-client";

export const prisma = new PrismaClient();
