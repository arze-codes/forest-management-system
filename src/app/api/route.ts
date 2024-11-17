import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	const movie = { id: 1, name: 'Star Wars' };
	return NextResponse.json(movie, { status: 200 });
}
