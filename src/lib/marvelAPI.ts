import { Character } from '@/app/types';
import crypto from 'crypto';

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY!;

const cache = new Map<string, { data: Character[]; timestamp: number }>();
const CACHE_EXPIRATION_TIME = 86400000;

export const fetchMarvelData = async (endpoint: string, queryParams: Record<string, string>) => {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');

  const queryString = new URLSearchParams(queryParams).toString();
  const urlWithoutDynamicParams = `https://gateway.marvel.com/v1/public/${endpoint}?${queryString}`;
  const cacheKey = crypto.createHash('md5').update(urlWithoutDynamicParams).digest('hex');
  
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_EXPIRATION_TIME) {
    return cached.data;
  }

  try {
    const url = `${urlWithoutDynamicParams}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const res = await fetch(url);
    const data = await res.json();

    cache.set(cacheKey, { data, timestamp: Date.now() });

    return data;
  } 
  catch (error) {
    console.error('Error fetching Marvel data:', error);
    throw new Error('Failed to fetch Marvel data');
  }
};