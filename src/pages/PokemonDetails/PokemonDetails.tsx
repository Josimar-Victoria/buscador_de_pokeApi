import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import usePokemonDetails from "../../hook/usePokemonDetails";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FaArrowLeft } from "react-icons/fa";
import Gallery from "../../components/Gallery/Gallery";
import PokemonDescription from "../../components/PokemonDescription/PokemonDescription";
import AbilitiesSection from "../../components/AbilitiesSection/AbilitiesSection";
import PokemonImage from "../../components/PokemonImage/PokemonImage";
import PokemonName from "../../components/PokemonName/PokemonName";

const PokemonDetails: React.FC = () => {
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const navigate = useNavigate();
  const initialId = parseInt(pokemonId || "1", 10);
  const [currentId, setCurrentId] = useState(initialId);
  const { pokemon, loading, error } = usePokemonDetails(currentId.toString());


  const handleNextPokemon = () => {
    setCurrentId((prevId) => prevId + 1);
  };

  const handlePreviousPokemon = () => {
    if (currentId > initialId) {
      setCurrentId((prevId) => prevId - 1);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
  }

  if (!pokemon) {
    return <div className="flex justify-center items-center h-screen">No se encontró el Pokémon.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Botón para regresar */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Regresar
      </button>

      <div className="flex flex-col items-center">

        <PokemonImage id={pokemon.id} name={pokemon.name} />

        {/*componente PokemonName */}
        <PokemonName name={pokemon.name} />
        <p className="text-xl text-gray-500 mt-2"># {pokemon.id}</p>
      </div>

      <div className="mt-8 space-y-6">
        {/*componente PokemonDescription */}
        <PokemonDescription description={pokemon.description} />

        {/*componente AbilitiesSection */}
        <AbilitiesSection abilities={pokemon.abilities} />
      </div>

      <Gallery currentPokemon={pokemon} />

      {/* Botones para cambiar de Pokémon */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handlePreviousPokemon}
          disabled={currentId === initialId}
          className={`px-4 py-2 rounded-lg font-semibold ${currentId === initialId
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
        >
          Pokémon Anterior
        </button>
        <button
          onClick={handleNextPokemon}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
        >
          Otro Pokémon
        </button>
      </div>
    </div>
  );
};

export default PokemonDetails;
