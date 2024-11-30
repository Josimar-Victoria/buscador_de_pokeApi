import React, { useState } from "react";

interface HeaderProps {
  onSearch: (term: string) => void;
  onClear: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onClear }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Trim para eliminar espacios y convertir a minúsculas
    const trimmedSearch = searchInput.trim().toLowerCase();
    onSearch(trimmedSearch);
  };

  const handleClear = () => {
    setSearchInput(''); // Limpiar el input local
    onClear(); // Llamar a la función de limpieza pasada desde el padre
  };

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md container sticky top-0 z-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h1 className="text-3xl font-bold">Poke MUTA</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/188/188987.png"
            alt="PokeAPI Logo"
            className="w-14 h-14"
          />
        </div>
        <form onSubmit={handleSearch} className="flex justify-center">
          <div className="relative w-full max-w-xl flex">
            <input
              type="text"
              placeholder="Busca un Pokémon por nombre o ID..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full p-3 rounded-l-md border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button 
              type="submit" 
              className="bg-red-500 text-white px-4 py-3 hover:bg-red-600 transition"
            >
              🔍
            </button>
            {searchInput && (
              <button 
                type="button"
                onClick={handleClear}
                className="bg-gray-300 text-black px-4 py-3 rounded-r-md hover:bg-gray-400 transition"
              >
                ✖️
              </button>
            )}
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;