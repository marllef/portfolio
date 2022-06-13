// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { github } from "~/configs/GithubAPI";
import { Repository } from "~/types";
import { RepoGithubAPI } from "~/types/GithubAPIRepos";

type APIError = {
  error: string;
  message: string;
};

export default async function repos(
  req: NextApiRequest,
  res: NextApiResponse<Repository[] | APIError>
) {
  try {
    switch (req.method) {
      case "GET":
        const response = await github.get<RepoGithubAPI[]>(
          `/users/marllef/repos`
        );

        if (!response.data) throw new Error("Dados não encontrados.");

        const repos: Repository[] = response.data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description,
          url: repo.html_url,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          license: repo.license,
        }));

        res.status(200).json(repos);
        break;
      default:
        throw new Error(`O método ${req.method} não é aceito.`);
    }
  } catch (err: any) {
    res.status(500).json({
      error: "server::error",
      message: err.message,
    });
  }
}
