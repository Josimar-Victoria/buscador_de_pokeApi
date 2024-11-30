import React from "react";

interface Props {
  description?: string;
}

const PokemonDescription: React.FC<Props> = ({ description }) => (
  <div className="text-gray-700 text-sm">
    <h3 className="text-lg font-semibold mb-2">Información adicional</h3>
    <p>{description || "No hay descripción disponible."}</p>
  </div>
);

export default PokemonDescription;
