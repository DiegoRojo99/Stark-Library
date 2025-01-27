import crypto from 'crypto';

const publicKey = process.env.MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;
const baseURL = process.env.MARVEL_API_BASE_URL!;

export const fetchMarvelData = async (endpoint: string) => {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');

  const url = `${baseURL}${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

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
