import { Repository } from "@prisma/client";
import { ActionButton } from "../ActionButton";
import { Divider } from "../Divider";
import styles from "./ProjectCard.module.css";

interface Props {
  repo: Repository;
}

export const Card = ({ repo }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.card}>
          <div className={styles.title}>{repo.name}</div>
          <Divider />
          <p className="max-h-full text-sm text-justify line-clamp-3">
            {repo.description}
          </p>
        </div>
        <div className="mt-2">
          <ActionButton href={`${repo.url}`}>Ver Projeto</ActionButton>
        </div>
      </div>
    </div>
  );
};
