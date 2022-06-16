import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Section = ({ children }: Props) => {
  return (
    <div className="relative w-full h-screen snap-start overflow-hidden">{children}</div>
  );
};
