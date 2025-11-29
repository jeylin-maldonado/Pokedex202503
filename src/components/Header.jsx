import { Link } from "react-router";

export const Header = ({ title = "Pokedex 2025 Tercero" }) => {
  return (
    <header className="bg-slate-950/90 border-b border-red-700 text-white flex justify-between items-center px-6 py-3">
      <h1 className="text-xl font-extrabold tracking-wide text-red-400 drop-shadow-sm">
        {title}
      </h1>
      <nav>
        <ul className="flex gap-2 items-center">
          <li>
            <Link
              to="/"
              className="inline-block px-4 py-2 text-sm font-bold rounded-md hover:bg-slate-800 transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="inline-block px-4 py-2 text-sm font-bold rounded-md hover:bg-slate-800 transition-colors"
            >
              Acerca de Nosotros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
