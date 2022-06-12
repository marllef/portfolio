import { Button } from "../Button";
import { SocialTag } from "../SocialTag";
import { TypingText } from "../TypingText";
import styles from "./Hero.module.css";

export const Hero = () => {
  const roles = [
    "Desenvolvedor Web Full-Stack",
    "Técnico em Redes de Computadores",
    "Bacharel em Ciência e Tecnologia",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.image_content}>
          <img src="/mh.png" />
        </div>
      </div>
      <div className={styles.main_content}>
        <h1 className={styles.header}>
          Olá, eu sou o <span className={styles.header_accent}>Marllef</span>
        </h1>

        <TypingText values={roles} timePerValue={10000} />

        <span className={styles.description}>
          <p>
            Estou no mundo do desenvolvimento de software a mais de{" "}
            <span className={styles.text_accent}>5 anos</span> e atualmente
            trabalho como{" "}
            <span className={styles.text_accent}>
              Desenvolvedor Web Full-Stack
            </span>
            .
          </p>
        </span>

        <div className="pt-12">
          <Button>Ver Portfólio</Button>
        </div>
      </div>
    </div>
  );
};
