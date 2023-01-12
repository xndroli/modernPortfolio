import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Alex's Portfolio</title>
			</Head>

			<h1 className="text-red-500">Let's build an AWESOME portfolio</h1>
		</div>
	);
}
