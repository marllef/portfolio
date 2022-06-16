// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "~/configs/PrismaConfig";
import { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type APIError = {
  error: string;
  message: string;
};

export default async function repos(
  req: NextApiRequest,
  res: NextApiResponse<any | APIError>
) {
  try {
    switch (req.method) {
      case "GET":
        const mRepos = await prisma.repository.findMany({
          where: {
            isPublic: true,
          },
        });

        if (!mRepos.length) throw new Error("Nenhum repositório encontrado.");

        res.status(200).json(mRepos);
        break;
      default:
        throw new Error(`O método ${req.method} não é aceito.`);
    }
  } catch (err: any) {
    if (err instanceof AxiosError) {
      res.status(Number(err.response?.status)).json({
        error: err.response?.statusText!,
        message: err.response?.data,
      });
    }

    res.status(500).json({
      error: "server::error",
      message: err.message,
    });
  }
}
