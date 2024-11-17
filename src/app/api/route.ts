import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	console.log('REQUEST', req.method, req.url);
	const movie = { id: 1, name: 'Star Wars' };
	return NextResponse.json(movie, { status: 200 });
}
