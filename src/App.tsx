

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
