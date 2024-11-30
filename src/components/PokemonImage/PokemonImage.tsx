import React from "react";

interface Props {
  id: number;
  name: string;
}

const PokemonImage: React.FC<Props> = ({ id, name }) => (
  <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
    alt={name}
    className="w-full sm:w-48 md:w-64 h-auto rounded-lg shadow-lg object-contain"
  />
);

export default PokemonImage;
