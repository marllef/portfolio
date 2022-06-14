import { PrismaClient, Repository as PRepository } from "@prisma/client";

export type Repository = PRepository;

export const prisma = new PrismaClient();
