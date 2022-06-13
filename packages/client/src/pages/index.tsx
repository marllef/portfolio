import { HeaderBar } from "~/components/Header/HeaderBar";
import { Hero } from "~/components/Hero";
import { Section } from "~/components/Section";
import { Projetos } from "~/templates/Projetos";

const Home = () => {
  return (
    <div className="snap-y snap-mandatory overflow-auto">
      <Section>
        <HeaderBar />
        <Hero />
      </Section>
      <Section>
        <div className="relative w-full h-full bg-slate-800">
          <Projetos />
        </div>
      </Section>
    </div>
  );
};

export default Home;
