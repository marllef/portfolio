import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Navbar = ({ children }: Props) => {
  return <nav className="flex">{children}</nav>;
};
