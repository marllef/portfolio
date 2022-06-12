import { ReactNode } from "react";
import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";

export const SocialTag = () => {
  return (
    <ul className="flex items-center justify-center text-emerald-600 text-2xl">
      <Item>
        <FaFacebookSquare />
      </Item>
      <Item>
        <FaInstagram />
      </Item>
      <Item>
        <FaGithub />
      </Item>
    </ul>
  );
};

const Item = ({ children }: { children?: ReactNode }) => {
  return <li className="flex p-2">{children}</li>;
};
