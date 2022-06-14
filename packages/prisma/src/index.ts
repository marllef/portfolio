import { PrismaClient, Repository as Repo } from "@prisma/client";

export const prisma = new PrismaClient();

export interface Repository extends Repo {}
