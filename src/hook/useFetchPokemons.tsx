import { useState, useEffect } from "react";
import { Pokemon, SpeciesData } from "../utils/types";

// Cache en memoria
export const cache: Record<string, { pokemons: Pokemon[]; total: number }> = {};

const useFetchPokemonsWithCache = (
  currentPage: number, 
  pokemonsPerPage: number, 
  searchTerm: string = ''
) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPokemons, setTotalPokemons] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);

        // Si hay un término de búsqueda, buscar directamente ese Pokémon
        if (searchTerm) {
          const searchedPokemon = await searchPokemon(searchTerm);
          if (searchedPokemon) {
            setPokemons([searchedPokemon]);
            setTotalPokemons(1);
          } else {
            setPokemons([]);
            setTotalPokemons(0);
          }
          setLoading(false);
          return;
        }

        // Verificar si la data está en cache
        const cacheKey = `page-${currentPage}`;
        if (cache[cacheKey]) {
          const { pokemons, total } = cache[cacheKey];
          setPokemons(pokemons);
          setTotalPokemons(total);
          setLoading(false);
          return;
        }

        // Fetch de la API si no está en cache
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${(currentPage - 1) * pokemonsPerPage}`
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            const pokemonData = await res.json();

            // Fetch para la especie
            const speciesResponse = await fetch(pokemonData.species.url);
            const speciesData: SpeciesData = await speciesResponse.json();

            // Obtener descripción en español
            const description =
              speciesData.flavor_text_entries.find((entry) => entry.language.name === "es")?.flavor_text ||
              "Descripción no disponible";

            // Agregar estadísticas
            const stats = pokemonData.stats.map((stat: any) => ({
              name: stat.stat.name,
              value: stat.base_stat,
            }));

            return { 
              ...pokemonData, 
              description, 
              stats 
            };
          })
        );

        // Guardar en cache
        cache[cacheKey] = { pokemons: pokemonDetails, total: data.count };

        setPokemons(pokemonDetails);
        setTotalPokemons(data.count);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setPokemons([]);
        setTotalPokemons(0);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [currentPage, pokemonsPerPage, searchTerm]);

  return { pokemons, loading, totalPokemons };
};

// Función auxiliar para buscar un Pokémon por nombre o ID
const searchPokemon = async (searchTerm: string): Promise<Pokemon | null> => {
  try {
    // Convertir el término de búsqueda a minúsculas y eliminar espacios
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    // Intentar buscar por ID o nombre exacto
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${normalizedSearchTerm}`);
      
      if (response.ok) {
        const pokemonData = await response.json();

        // Fetch para la especie
        const speciesResponse = await fetch(pokemonData.species.url);
        const speciesData: SpeciesData = await speciesResponse.json();

        // Obtener descripción en español
        const description =
          speciesData.flavor_text_entries.find((entry) => entry.language.name === "es")?.flavor_text ||
          "Descripción no disponible";

        // Agregar estadísticas
        const stats = pokemonData.stats.map((stat: any) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        }));

        return { ...pokemonData, description, stats };
      }
    } catch (exactMatchError) {
      console.log("Error en búsqueda exacta:", exactMatchError);
    }

    // Si no encuentra búsqueda exacta, intentar búsqueda general
    const allPokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
    const allPokemonData = await allPokemonResponse.json();

    // Buscar Pokémon que coincidan parcialmente
    const matchingPokemon = allPokemonData.results.find((pokemon: { name: string }) => 
      pokemon.name.toLowerCase().includes(normalizedSearchTerm)
    );

    if (matchingPokemon) {
      const response = await fetch(matchingPokemon.url);
      const pokemonData = await response.json();

      // Fetch para la especie
      const speciesResponse = await fetch(pokemonData.species.url);
      const speciesData: SpeciesData = await speciesResponse.json();

      // Obtener descripción en español
      const description =
        speciesData.flavor_text_entries.find((entry) => entry.language.name === "es")?.flavor_text ||
        "Descripción no disponible";

      // Agregar estadísticas
      const stats = pokemonData.stats.map((stat: any) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));

      return { ...pokemonData, description, stats };
    }

    return null;
  } catch (error) {
    console.error("Error searching Pokémon:", error);
    return null;
  }
};

export default useFetchPokemonsWithCache;
