import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Alex's Portfolio</title>
			</Head>

			<h1>Let's build an AWESOME portfolio</h1>
		</div>
	);
}
