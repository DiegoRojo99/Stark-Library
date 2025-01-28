'use client';

import { Character, Comic, ResourceList, Url } from '@/app/types';
import { CharacterAPI } from '@/app/types/marvel/api';
import SmallComic from '@/components/comics/SmallComic';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CharacterDetails = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<Comic[]>([]);
  const [series, setSeries] = useState<ResourceList | null>(null);
  const [events, setEvents] = useState<ResourceList | null>(null);
  const [stories, setStories] = useState<ResourceList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const characterResponse = await fetch(`/api/characters/${id}`);
        const characterResult: CharacterAPI = await characterResponse.json();
        setCharacter(characterResult.character);
        setComics(characterResult.comics);
        setSeries(characterResult.character.series);
        setEvents(characterResult.character.events);
        setStories(characterResult.character.stories);
      } 
      catch (error: unknown) {
        setError((error as Error).message);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-4">Loading character details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!character) return <p className="text-center mt-4">Character not found!</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Thumbnail */}
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="w-64 h-64 rounded-lg shadow-md"
          width={400}
          height={400}
        />
        <div className="ml-0 md:ml-6 mt-4 md:mt-0">
          {/* Name */}
          <h1 className="text-3xl font-bold">{character.name}</h1>

          {/* Description */}
          {character.description ? (
            <p className="mt-2 text-gray-700">{character.description}</p>
          ) : (
            <p className="mt-2 text-gray-500 italic">No description available.</p>
          )}

          {/* More Info & Links */}
          <div className='mt-4 flex justify-between'>
            <div>
              <h2 className="text-xl font-semibold">More info:</h2>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                {character.series.available > 0 && <li>{character.series.available} Series</li>}
                {character.events.available > 0 && <li>{character.events.available} Events</li>}
                {character.stories.available > 0 && <li>{character.stories.available} Stories</li>}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Links:</h2>
              <ul className="list-none flex flex-column gap-8 text-gray-700 mt-2">
                {character.urls.map((url, index) => characterURL(url, index))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Lists of Comics, Series, Events, and Stories */}
      <div className="mt-8">
        {/* Comics */}
        {comics?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Comics:</h2>
            <div>
              {comics.map((comic, index) => <SmallComic key={index} comic={comic} />)}
            </div>
          </div>
        )}

        {/* Series */}
        {series && series.items.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Series:</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {series.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.resourceURI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Events */}
        {events && events.items.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Events:</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {events.items.map((event, index) => (
                <li key={index}>
                  <Link
                    href={event.resourceURI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stories */}
        {stories && stories.items.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Stories:</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {stories.items.map((story, index) => (
                <li key={index}>
                  <strong>{story.name}</strong>
                  {story.type && <span className="text-gray-500"> ({story.type})</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

function characterURL(url: Url, index: number){
  switch (url.type){
    case "detail":
      return (
        <Link key={index} href={url.url} referrerPolicy='no-referrer' target="_blank">
          Details
        </Link>
      )
    case "wiki":
      return (
        <Link key={index} href={url.url} referrerPolicy='no-referrer' target="_blank">
          Wiki
        </Link>
      )
    case "comiclink":
      return (
        <Link key={index} href={url.url} referrerPolicy='no-referrer' target="_blank">
          Comic Link
          {/* <Image
            src='https://www.marvel.com/favicon/favicon.ico'
            alt='Comic Link'
            title='Comic Link'
            width={40}
            height={40}
          />         */}
        </Link>
      )
  }
}

export default CharacterDetails;