export const HeroPanel = ({ photoId = "120" }) => {
  return (
    <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden relative max-w-screen bg-black">
      <picture className="w-full h-full block">
        <source
          srcSet={`https://picsum.photos/id/${photoId}/1300/720`}
          media="(min-width:1025px)"
        />
        <source
          srcSet={`https://picsum.photos/id/${photoId}/1024/640`}
          media="(min-width:720px)"
        />
        <img
          className="w-full h-full object-cover opacity-70"
          src={`https://picsum.photos/id/${photoId}/480/480`}
          alt="Fondo de la Pokédex"
        />
      </picture>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[26rem] p-6 md:p-8 bg-slate-950/85 border border-red-600 rounded-2xl shadow-2xl shadow-red-900/70">
        <h2 className="text-2xl md:text-3xl font-extrabold text-red-400 mb-2">
          Bienvenida a tu Pokédex
        </h2>
        <p className="text-sm md:text-base text-slate-200 mb-4">
          Explora el mundo Pokémon con un diseño personalizado. Navega por la
          lista, identifica a tus favoritos y practica tus habilidades de
          desarrollo web.
        </p>
        <button className="btn principal">
          Ver Pokédex
        </button>
      </div>
    </div>
  );
};
