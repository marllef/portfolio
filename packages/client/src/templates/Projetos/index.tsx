import axios from "axios";
import { useEffect, useState } from "react";
import { ProjectCard } from "~/components/ProjectCard";
import { Repository } from "~/types";

export const Projetos = () => {
  const [items, setItems] = useState<Repository[]>();
  useEffect(() => {
    axios
      .get<Repository[]>("/api/repos")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div id="projetos" className="w-full h-full p-5">
      <h1 className="text-slate-100 text-3xl font-semibold uppercase">
        Projetos
      </h1>
      <main className="flex h-full flex-wrap justify-start items-center">
        {items?.map((repo) => (
          <ProjectCard repo={repo} />
        ))}
      </main>
    </div>
  );
};
