import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hi, the name's Alex Figoli",
			'Guy-who-loves-cars.tsx',
			'<ButLovesToCodeMore />',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="#F7AB0A" />
			</h1>
		</div>
	);
}

export default Hero;
