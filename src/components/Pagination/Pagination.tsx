import React from "react";

interface Props {
  currentPage: number;
  totalPokemons: number;
  pokemonsPerPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPokemons,
  pokemonsPerPage,
  handleNextPage,
  handlePreviousPage,
}) => (
  <div className="bg-white p-4 shadow-lg flex justify-center gap-4 mt-4">
    <button
      onClick={handlePreviousPage}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      disabled={currentPage === 1}
    >
      Anterior
    </button>
    <button
      onClick={handleNextPage}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      disabled={currentPage * pokemonsPerPage >= totalPokemons}
    >
      Siguiente
    </button>
  </div>
);

export default Pagination;
