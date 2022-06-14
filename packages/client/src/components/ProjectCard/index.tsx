import { Repository } from "~/types";
import { ActionButton } from "../ActionButton";
import { Divider } from "../Divider";
import styles from "./ProjectCard.module.css";

interface Props {
  repo: Repository;
}

export const ProjectCard = ({ repo }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>{repo.name}</div>
        <Divider />
        <p>{repo.description}</p>
      </div>
      <div className="mt-2">
        <ActionButton href="#projetos">Ver Projeto</ActionButton>
      </div>
    </div>
  );
};
