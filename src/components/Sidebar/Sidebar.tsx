import React from "react";
import { Ability, Pokemon, Type } from "../../utils/types";
import Gallery from "../Gallery/Gallery";
import TypeList from "../TypeList/TypeList";
import AbilitiesSection from "../AbilitiesSection/AbilitiesSection";
import PokemonImage from "../PokemonImage/PokemonImage";
import PokemonName from "../PokemonName/PokemonName";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import PokemonDescription from "../PokemonDescription/PokemonDescription";
import { useNavigate } from "react-router-dom";

interface Props {
  currentPokemon: Pokemon;
}

const Sidebar: React.FC<Props> = React.memo(({ currentPokemon }) => {
  const navigate = useNavigate();
  // console.log(currentPokemon, '+++++currentPokemon')

  if (!currentPokemon) return null; // En caso de que currentPokemon esté vacío o indefinido.


  const types: Type[] = currentPokemon.types || []; // Aseguramos que 'types' sea un array de Type.
  const abilities: Ability[] = currentPokemon.abilities || []; // Aseguramos que 'abilities' sea un array de Ability.

  const handleViewDetail = () => {
    navigate(`/pokemon/${currentPokemon.id}`);
  };

  return (
    <aside className="hidden md:block bg-white shadow-md rounded-md p-4 md:w-1/3 md:max-h-[86vh] md:overflow-y-auto md:sticky md:top-20">
      {/*componente PokemonImage */}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`}
        alt={currentPokemon.name}
        className="w-48 h-48 mb-4"
      />

      {/*componente PokemonName */}
      <PokemonName name={currentPokemon.name} />

      {/*componente PokemonInfo */}
      <PokemonInfo abilities={abilities} baseExperience={currentPokemon.base_experience} />

      {/*componente PokemonDescription */}
      <PokemonDescription description={currentPokemon.description} />

      {/*componente AbilitiesSection */}
      <AbilitiesSection abilities={abilities} />


      {/* componente TypeList */}
      <TypeList types={types} />
      {/* componente Gallery */}
      <Gallery currentPokemon={currentPokemon} />


      {/* Botón para ver el detalle del Pokémon */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleViewDetail}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          Ver detalle del Pokémon
        </button>
      </div>
    </aside>
  );
});

export default Sidebar;
