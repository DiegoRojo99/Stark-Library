import crypto from 'crypto';

const publicKey = process.env.MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;

export const fetchMarvelData = async (endpoint: string, queryParams: Record<string, string>) => {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `https://gateway.marvel.com/v1/public/${endpoint}?${queryString}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } 
  catch (error) {
    console.error('Error fetching Marvel data:', error);
    throw new Error('Failed to fetch Marvel data');
  }
};
