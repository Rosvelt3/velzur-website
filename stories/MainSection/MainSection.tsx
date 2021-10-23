/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import { useTransition, animated, config } from 'react-spring';
import { CallToActionButton } from './CallToActionButton/CallToActionButton';

const words = ['experiencias', 'productos', 'soluciones'];
export const MainSection = () => {
	const [index, setIndex] = useState(0);
	const textAnimation = useTransition(index, {
		config: config.gentle,
		from: { opacity: 1 },
		enter: { opacity: 0 },
		leave: { opacity: 1 },
		delay: 500,
		onRest: () => {
			setIndex(index + 1);
			if (index === 2) setIndex(0);
		}
	});

	return (
		<section>
			<h1>
				Construimos{' '}
				{textAnimation(({ opacity }, item) => (
					<animated.span
						style={{
							opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] })
						}}
					>
						{words[item]}
					</animated.span>
				))}{' '}
				digitales para personas increíbles.
			</h1>
			<CallToActionButton
				css={css`
					margin-top: 2rem;
				`}
				label="Contáctanos"
			/>
		</section>
	);
};
