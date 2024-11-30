import React from "react";
import { Pokemon } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import PokemonImage from "../PokemonImage/PokemonImage";
import PokemonName from "../PokemonName/PokemonName";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = React.memo(({ pokemon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex w-full">
      <div className="w-1/3 mr-4">
        {/*componente PokemonImage */}
        <PokemonImage id={pokemon.id} name={pokemon.name} />
      </div>
      <div className="w-2/3 flex flex-col justify-between">
        <div>
          
            {/*componente PokemonName */}
            <PokemonName name={pokemon.name} />
       
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <div>
              <strong>Poder:</strong>
              <span className="ml-2">{pokemon.base_experience}</span>
            </div>
            <div>
              <strong>Nivel:</strong>
              <span className="ml-2">{Math.floor(Math.random() * 100) + 1}</span>
            </div>
            <div>
              <strong>ID:</strong>
              <span className="ml-2">{pokemon.name} - {pokemon.id}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 text-sm"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
});

export default PokemonCard;
