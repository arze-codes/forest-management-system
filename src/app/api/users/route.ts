import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
	const users = [
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'Bob' },
		{ id: 3, name: 'Charlie' },
		{ id: 4, name: 'David' }
	];
	return NextResponse.json(users, { status: 200 });
}
