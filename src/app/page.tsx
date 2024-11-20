import Image from 'next/image';
import React from 'react';

import SignIn from '@/components/signin';

export default function Home() {
	return (
		<div>
			<SignIn />
			<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
		</div>
	);
}
