import { NextResponse } from 'next/server';
import { fetchMarvelData } from '@/lib/marvelAPI';

export async function GET() {
  try {
    const charactersData = await fetchMarvelData('/characters');
    return NextResponse.json(charactersData);
  } catch (error) {
    console.error('Error fetching Marvel data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}