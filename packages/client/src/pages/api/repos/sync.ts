// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@sigma/prisma";
import { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { github } from "~/configs/GithubAPI";
import { RepoGithubAPI } from "~/types/GithubAPIRepos";

type APIError = {
  error: string;
  message: string;
};

export default async function syncRepos(
  req: NextApiRequest,
  res: NextApiResponse<any | APIError>
) {
  try {
    switch (req.method) {
      case "POST":
        const response = await github.get<RepoGithubAPI[]>(
          `/users/marllef/repos`
        );

        if (!response.data) throw new Error("Repositórios não encontrados.");

        const registers = response.data.map(async (repo) => {
          try {
            let mData = await prisma.repository.upsert({
              where: {
                key: repo.id,
              },
              update: {
                description: repo.description,
                url: repo.html_url,
                updated_at: repo.updated_at,
              },
              create: {
                name: repo.name,
                key: repo.id,
                description: repo.description,
                url: repo.html_url,
                isPublic: true,
                created_at: repo.created_at,
                updated_at: repo.updated_at,
              },
            });
            return mData;
          } catch (err: any) {
            let mData = await prisma.repository.upsert({
              where: {
                key: repo.id,
              },
              update: {
                description: repo.description,
                url: repo.html_url,
                updated_at: repo.updated_at,
              },
              create: {
                name: repo.name,
                key: repo.id,
                description: repo.description,
                url: repo.html_url,
                isPublic: true,
                created_at: repo.created_at,
                updated_at: repo.updated_at,
              },
            });
            return mData;
          }
        });

        const data = await Promise.all(registers);

        res.status(200).json({
          message: `Repositórios sincronizados com sucesso!`,
          repos: data,
        });
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
