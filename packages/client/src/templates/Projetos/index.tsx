import { Repository } from "@sigma/prisma";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card as Card } from "~/components/Card";

interface Props {
  repos: Repository[];
}

export const Projetos = ({ repos }: Props) => {
  const [items, setItems] = useState<Repository[]>([]);
  useEffect(() => {
    console.log(repos);
    setItems(repos);
  }, [repos]);

  return (
    <div id="projetos" className="w-full h-full p-5">
      <h1 className="text-slate-100 text-3xl font-semibold uppercase">
        Projetos
      </h1>
      <div className="pt-10 px-2 lg:px-16 xl:px-20">
        <main className="flex h-full flex-wrap justify-center items-center flex-grow content-start">
          {items?.map((repo) => (
            <Card key={repo.id} repo={repo} />
          ))}
        </main>
      </div>
    </div>
  );
};
