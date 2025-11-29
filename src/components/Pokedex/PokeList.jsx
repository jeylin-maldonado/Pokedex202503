import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Button } from "../Button";
import { usePokemonService } from "../../hooks/usePokemonService";

const PAGE_LIMIT = 20;

export const PokeList = () => {

  const { getPokemonList, getPokemonId, getPokemonImgUrl } = usePokemonService();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getPokemonList(page, PAGE_LIMIT);

        const enrichedResults = response.results.map((pokemon) => {
          const id = getPokemonId(pokemon.url);
          const img = getPokemonImgUrl(id);

          return {
            id,
            name: pokemon.name,
            defaultImgUri: img,
          };
        });

        setData({
          ...response,
          results: enrichedResults,
        });

      } catch (err) {
        console.error("Error cargando la Pokédex", err);
        setError("No se pudieron cargar los Pokémon.");
      }

      setLoading(false);
    };

    loadData();
  }, [page]); // ← SOLO depende de page (esto evita el loop infinito)

  const totalPages = data ? Math.ceil(data.count / PAGE_LIMIT) : 1;

  return (
    <>
      <h2 className="text-2xl text-red-400 font-bold text-center mb-4">
        Pokédex Nacional
      </h2>

      {loading && (
        <p className="text-center text-slate-300">Cargando Pokémon...</p>
      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {data && (
        <>
          <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-8 place-items-center">
            {data.results.map((pokemon) => (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                defaultImgUri={pokemon.defaultImgUri}
              />
            ))}
          </section>

          <div className="flex justify-center gap-6">
            {page > 1 && (
              <Button onClick={() => setPage(page - 1)}>
                Anterior
              </Button>
            )}

            <span className="text-white">
              Página {page} de {totalPages}
            </span>

            {page < totalPages && (
              <Button onClick={() => setPage(page + 1)}>
                Siguiente
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
};
