'use client'

import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '../types';
import Pagination from '@/components/Pagination';

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchCharacters = async (page: number) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/characters?page=${page}&limit=12`);
      const data = await res.json();

      setCharacters(data.data.results);
      setTotalPages(Math.ceil(data.data.total / 12));
    } 
    catch (error: unknown) {
      setError((error as Error).message);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Marvel Characters</h1>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
      
      {/* Pagination component */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Characters;