import React from "react";
import { Ability } from "../../utils/types";



interface Props {
  abilities: Ability[];
  baseExperience: number;
}

const PokemonInfo: React.FC<Props> = ({ abilities, baseExperience }) => (
  <p className="text-gray-600 text-center mb-4">
    Tipo:{" "}
    <span className="font-semibold">
      {abilities[0]?.ability.name.charAt(0).toUpperCase() +
        abilities[0]?.ability.name.slice(1)}
    </span>{" "}
    <br />
    Poder: <span className="font-semibold">{baseExperience}</span>
  </p>
);

export default PokemonInfo;
