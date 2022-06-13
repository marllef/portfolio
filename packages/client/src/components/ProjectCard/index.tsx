import { ActionButton } from "../ActionButton";
import { Divider } from "../Divider";
import styles from "./ProjectCard.module.css";

export const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>Project Title</div>
        <Divider />
        <p>Description</p>
      </div>
      <div className="mt-2">
        <ActionButton href="#projetos">Ver Projeto</ActionButton>
      </div>
    </div>
  );
};
