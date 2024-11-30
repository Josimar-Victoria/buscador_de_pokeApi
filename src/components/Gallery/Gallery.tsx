// components/Gallery.tsx
import React from 'react';
import { GalleryProps } from '../../utils/types';



const Gallery: React.FC<GalleryProps> = ({ currentPokemon }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Galería</h3>
      <div className="grid grid-cols-3 gap-2">
        {currentPokemon.sprites && (
          <>
            {/* Imagen frontal */}
            {currentPokemon.sprites.front_default && (
              <div className="flex flex-col items-center">
                <img
                  src={currentPokemon.sprites.front_default}
                  alt="Frontal"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-sm mt-1">Frontal</p>
              </div>
            )}
            
            {/* Imagen frontal brillante */}
            {currentPokemon.sprites.front_shiny && (
              <div className="flex flex-col items-center">
                <img
                  src={currentPokemon.sprites.front_shiny}
                  alt="Frontal brillante"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-sm mt-1">Frontal Brillante</p>
              </div>
            )}

            {/* Imagen trasera */}
            {currentPokemon.sprites.back_default && (
              <div className="flex flex-col items-center">
                <img
                  src={currentPokemon.sprites.back_default}
                  alt="Trasero"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-sm mt-1">Trasero</p>
              </div>
            )}

            {/* Imagen trasera brillante */}
            {currentPokemon.sprites.back_shiny && (
              <div className="flex flex-col items-center mt-4">
                <img
                  src={currentPokemon.sprites.back_shiny}
                  alt="Trasero brillante"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-sm mt-1">Trasero Brillante</p>
              </div>
            )}

            {/* Imagen de Mundo de Sueños */}
            {currentPokemon.sprites.other?.dream_world?.front_default && (
              <div className="flex flex-col items-center mt-4">
                <img
                  src={currentPokemon.sprites.other.dream_world.front_default}
                  alt="Mundo de Sueños"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-sm mt-1">Mundo de Sueños</p>
              </div>
            )}

            {/* Imagen de Casa */}
            {currentPokemon.sprites.other?.home?.front_default && (
              <div className="flex flex-col items-center mt-4">
                <img
                  src={currentPokemon.sprites.other.home.front_default}
                  alt="Casa"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-sm mt-1">Casa</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
