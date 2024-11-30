import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="mt-4 flex justify-center">
      <input
        type="text"
        placeholder="Busca un Pokémon..."
        className="w-2/3 p-2 rounded-md border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

export default SearchBar;
