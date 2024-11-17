import Image from 'next/image';
import React from 'react';
import Hello from '@/components/Hello';

export default function Home() {
	return (
		<div>
			<Hello />
			<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
		</div>
	);
}
