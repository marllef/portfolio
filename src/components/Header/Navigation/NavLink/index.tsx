import Link from "next/link";

interface Props {
  name: string;
  to?: string;
}

export const NavLink = ({ to = "/", name }: Props) => {
  return (
    <Link href={to} passHref scroll={false}>
      <a className="flex flex-row justify-center items-center font-semibold py-1 px-2 hover:text-emerald-600">
        {name}
      </a>
    </Link>
  );
};
