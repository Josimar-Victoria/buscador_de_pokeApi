import React from "react";

interface Props {
  name: string;
}

const PokemonName: React.FC<Props> = ({ name }) => (
  <h2 className="text-xl font-bold mb-2">
    {name.charAt(0).toUpperCase() + name.slice(1)}
  </h2>
);

export default PokemonName;
