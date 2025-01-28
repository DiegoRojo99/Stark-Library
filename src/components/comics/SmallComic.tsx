'use client';

import { Comic } from '@/app/types';
import Image from 'next/image';

const SmallComic = ({ comic }: {comic: Comic}) => {
  const { title, thumbnail, description, creators } = comic;

  return (
    <div className="flex my-4 items-start gap-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Thumbnail */}
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        className="w-20 h-auto rounded-lg object-cover"
        width={80}
        height={123}
      />

      {/* Comic Details */}
      <div className="flex flex-col flex-1 p-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description ? (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        ) : (
          <p className="text-sm text-gray-500 mt-1 italic">No description available.</p>
        )}
        {creators.items.length > 0 && (
          <div className="text-sm text-gray-700 mt-2">
            <strong>Creators:</strong>{' '}
            {creators.items.map((creator, index) => (
              <span key={index}>
                {creator.name}
                {index < creators.items.length - 1 && ', '}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallComic;