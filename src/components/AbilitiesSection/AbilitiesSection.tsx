// AbilitiesSection.tsx
import React from "react";
import { Ability } from "../../utils/types"; // Asegúrate de importar la interfaz correctamente.

interface Props {
  abilities: Ability[]; // Usamos Ability[] porque abilities es un arreglo de objetos Ability.
}

const AbilitiesSection: React.FC<Props> = ({ abilities }) => {
  return (
    <div className="mb-4 mt-3">
      <h3 className="text-lg font-semibold mb-2">Habilidades y Poderes</h3>
      {abilities.length ? (
        <ul className="list-disc list-inside text-gray-700">
          {abilities.map((ability, index) => (
            <li key={index} className="mb-1">
              <span className="font-semibold">
                {ability.ability.name.charAt(0).toUpperCase() +
                  ability.ability.name.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron habilidades para este Pokémon.</p>
      )}
    </div>
  );
};

export default AbilitiesSection;
