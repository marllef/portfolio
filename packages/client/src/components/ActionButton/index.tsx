import { ReactNode } from "react";
import styles from "./ActionButton.module.css";

interface Props {
  children?: ReactNode;
  href?: string;
}

export const ActionButton = ({ children, href = "/" }: Props) => {
  return (
    <a href={href} target="_blank" className={styles.container}>
      {children}
    </a>
  );
};
