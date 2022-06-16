import { Repository } from "@prisma/client";
import { useEffect, useState } from "react";
import { Card as Card } from "~/components/Card";

interface Props {
  repos: Repository[];
}

export const Projetos = ({ repos }: Props) => {
  const [items, setItems] = useState<Repository[]>([]);
  useEffect(() => {
    setItems(repos);
  }, [repos]);

  return (
    <div id="projetos" className="w-full h-full p-5">
      <h1 className="text-slate-100 text-4xl py-12 text-center font-semibold uppercase">
        Meus Projetos
      </h1>
      
        <main className="flex h-full w-full flex-wrap justify-center px-10 flex-grow content-start overflow-auto">
          {items?.map((repo) => (
            <Card key={repo.id} repo={repo} />
          ))}
        </main>
      
    </div>
  );
};
