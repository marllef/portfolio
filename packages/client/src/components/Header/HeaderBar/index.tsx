import { Navbar } from "../Navigation";
import { NavLink } from "../Navigation/NavLink";

export const HeaderBar = () => {
  return (
    <div className="flex w-full sticky top-0 right-0 justify-center md:justify-between bg-slate-100 items-center h-16 lg:px-60 md:px-40">
      <div className="hidden md:flex">Marllef Alves</div>
      <Navbar>
        <NavLink to="/" name="Inicio" />
        <NavLink to="/" name="Portfólio" />

        <NavLink to="/" name="Sobre" />
      </Navbar>
    </div>
  );
};
