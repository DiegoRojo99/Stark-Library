'use client'

import Link from 'next/link';
import { Character } from '../types';
import Image from 'next/image';

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <Link href={`/characters/${character.id}`} className="max-w-xs rounded-lg border p-0 bg-white shadow-lg">
    
      <Image
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-60 object-cover rounded-t-lg"
        width={400}
        height={400}
      />
      <div className="mt-2 px-4 pb-4">
        <h3 className="text-lg font-bold text-black">{character.name}</h3>
        <p className="text-sm text-gray-600">{character.description || 'No description available'}</p>
      </div>
    
    </Link>
  );
};

export default CharacterCard;
