import React, { useEffect, useState } from "react";

import { Pokemon } from "../../utils/types";
import useFetchPokemonsWithCache from "../../hook/useFetchPokemons";
import Header from "../../components/Header/Header";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Sidebar from "../../components/Sidebar/Sidebar";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";

const PokemonList: React.FC = () => {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [pokemonsPerPage] = useState(20); // Cantidad de Pokémon por página
  const [searchTerm, setSearchTerm] = useState('');
  const [noResults, setNoResults] = useState(false);

  const { pokemons, loading, totalPokemons } = useFetchPokemonsWithCache(currentPage, pokemonsPerPage, searchTerm);

  // Cambia el Pokémon actual cada minutos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPokemonIndex((prevIndex) => (prevIndex + 1) % pokemons.length);
    }, 110000)

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [pokemons]);

  // Efecto para manejar resultados vacíos
  useEffect(() => {
    setNoResults(pokemons.length === 0 && searchTerm !== '');
  }, [pokemons, searchTerm]);

  // Obtener el Pokémon actual
  const currentPokemon = pokemons[currentPokemonIndex];

  // Función para limpiar la búsqueda y volver a la vista inicial
  const handleClearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
    setNoResults(false);
  };

  return (

    <div className="bg-gray-100 flex flex-col items-center">
      <Header onSearch={setSearchTerm} onClear={handleClearSearch}  />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {noResults ? (
            <div className="text-center text-red-500 mt-10 text-2xl">
              No se encontraron resultados para "{searchTerm}"
            </div>
          ) : (
            <div className="container mx-auto px-4 max-w-7xl flex gap-6 mt-16">
              <Sidebar currentPokemon={currentPokemon} />
              <main className="flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pokemons.map((pokemon:Pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPokemons={totalPokemons}
                  pokemonsPerPage={pokemonsPerPage}
                  handleNextPage={() => setCurrentPage(currentPage + 1)}
                  handlePreviousPage={() => setCurrentPage(currentPage - 1)}
                />
              </main>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PokemonList;