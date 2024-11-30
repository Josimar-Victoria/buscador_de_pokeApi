import React from 'react';
import { Type } from '../../utils/types';


interface Props {
    types: Type[];
}
const TypeList: React.FC<Props> = ({ types }) => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Tipos</h3>
            {types?.length ? (
                <ul className="list-disc list-inside text-gray-700">
                    {types.map((type, index) => (
                        <li key={index} className="mb-1">
                            <span className="font-semibold">
                                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron tipos para este Pokémon.</p>
            )}
        </div>
    );
};

export default TypeList;
