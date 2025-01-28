import { NextResponse } from 'next/server';
import {fetchMarvelData} from '@/utils/marvelAPI';
import { context } from '@/app/types/routes';

export async function GET(req: Request, context: context) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ error: 'Character ID is required.' }, { status: 400 });
  }

  try {
    const characterData = await fetchMarvelData(`characters/${id}`, {});
    const comicsData = await fetchMarvelData(`characters/${id}/comics`, {});

    const character = characterData.data.results[0];
    const comics = comicsData.data.results;

    const data = {
      character,
      comics
    }
    return NextResponse.json(data);
  } 
  catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json({ error: `Failed to fetch character details. ${errorMessage}` }, { status: 500 });
  }
}