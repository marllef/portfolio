import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, ...rest }: Props) => {
  return <button className={styles.btn} {...rest} />;
};
