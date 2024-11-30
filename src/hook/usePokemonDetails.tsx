import { useState, useEffect } from "react";
import { Pokemon } from "../utils/types";
import { cache } from "./useFetchPokemons";

const usePokemonDetails = (pokemonId: string | undefined) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonFromCacheOrApi = async () => {
      try {
        if (!pokemonId) {
          setError("No se proporcionó un ID válido.");
          setLoading(false);
          return;
        }

        // Buscar en el cache primero
        const cachedPokemon = Object.values(cache)
          .flatMap((page) => page.pokemons)
          .find((p) => p.id.toString() === pokemonId);

        if (cachedPokemon) {
         console.log(cachedPokemon, "cachedPokemon detalle cache");
          setPokemon(cachedPokemon);
          setLoading(false);
          return;
        }

        // Si no está en el cache, hacer fetch a la API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!response.ok) {
          throw new Error("No se encontró el Pokémon.");
        }
        const pokemonData = await response.json();

        // Fetch de la especie
        const speciesResponse = await fetch(pokemonData.species.url);
        const speciesData = await speciesResponse.json();

        // Obtener descripción en español
        const description =
          speciesData.flavor_text_entries.find((entry: any) => entry.language.name === "es")?.flavor_text ||
          "Descripción no disponible";

        // Transformar estadísticas
        const stats = pokemonData.stats.map((stat: any) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        }));

        setPokemon({ ...pokemonData, description, stats });
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error al cargar el Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonFromCacheOrApi();
  }, [pokemonId]);

  return { pokemon, loading, error };
};

export default usePokemonDetails;
