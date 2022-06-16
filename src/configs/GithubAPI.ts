import axios from "axios";

export const github = axios.create({
  baseURL: process.env.GITHUB_API,
});
