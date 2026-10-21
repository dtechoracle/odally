import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const dbUrl = process.env.PRISMA_DB_URL || process.env.DATABASE_URL?.replace(/^"|"$/g, '').replace(/^'|'$/g, '');

export const prisma =
  global.prisma ||
  new PrismaClient({
    datasourceUrl: dbUrl,
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
