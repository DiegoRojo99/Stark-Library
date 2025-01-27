import { fetchMarvelData } from '@/lib/marvelAPI';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name');
  const limit = url.searchParams.get('limit') || '12';
  const page = url.searchParams.get('page') || '1';

  const queryParams: Record<string, string> = {
    limit,
    offset: ((Number(page) - 1) * Number(limit)).toString(),
  };

  if (name) queryParams.name = name;

  try {
    const data = await fetchMarvelData('characters', queryParams);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } 
  catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch Marvel data' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
