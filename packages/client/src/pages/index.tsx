import { HeaderBar } from "~/components/Header/HeaderBar";
import { Hero } from "~/components/Hero";
import { Section } from "~/components/Section";

const Home = () => {
  return (
    <div className="snap-y snap-mandatory overflow-auto">
      <Section>
        <HeaderBar />
        <Hero />
      </Section>
      <Section>
        
      </Section>
    </div>
  );
};

export default Home;
