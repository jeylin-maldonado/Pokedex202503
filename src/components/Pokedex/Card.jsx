// Tarjeta individual de Pokémon
export const Card = ({ id, name, defaultImgUri }) => {
  return (
    <article className="bg-slate-900/80 border border-red-500/70 rounded-2xl shadow-lg shadow-red-900/40 flex flex-col items-center w-40 sm:w-44 px-4 py-5 hover:-translate-y-1 hover:shadow-red-500/70 transition-transform duration-200">
      <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-3 overflow-hidden">
        <img
          src={defaultImgUri}
          alt={name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-xs uppercase tracking-wide text-slate-400">
        N.º {id}
      </span>
      <h2 className="mt-1 text-sm font-semibold text-slate-100 text-center capitalize">
        {name}
      </h2>
    </article>
  );
};
