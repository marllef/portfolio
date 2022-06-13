import { ProjectCard } from "~/components/ProjectCard";

export const Projetos = () => {
  return (
    <div id="projetos" className="w-full h-full p-5">
      <h1 className="text-slate-100 text-3xl font-semibold uppercase">
        Projetos
      </h1>
      <main className="flex h-full justify-center items-center">
        <ProjectCard />
      </main>
    </div>
  );
};
