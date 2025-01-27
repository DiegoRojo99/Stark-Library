'use client'

import { Character } from '../types';

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="max-w-xs rounded-lg border p-0 bg-white shadow-lg">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-60 object-cover rounded-t-lg"
      />
      <div className="mt-2 px-4 pb-4">
        <h3 className="text-lg font-bold text-black">{character.name}</h3>
        <p className="text-sm text-gray-600">{character.description || 'No description available'}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
