import { Repository } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderBar } from "~/components/Header/HeaderBar";
import { Hero } from "~/components/Hero";
import { Section } from "~/components/Section";
import { Projetos } from "~/templates/Projetos";

const Home = () => {
  const [data, setData] = useState<Repository[]>([]);

  useEffect(() => {
    axios
      .get("/api/repos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-auto">
      <Section>
        <HeaderBar />
        <Hero />
      </Section>
      <Section>
        <div className="relative w-full h-full bg-slate-800">
          <Projetos repos={data} />
        </div>
      </Section>
    </div>
  );
};

export default Home;
