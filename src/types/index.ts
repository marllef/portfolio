import { License } from "./GithubAPIRepos";

export type Repository = {
  id?: number;
  name: string;
  full_name: string;
  description?: string;
  url?: string;
  created_at: string;
  updated_at: string;
  license?: License;
};