/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Navbar } from './Navbar/Navbar';
import { MainSection } from './MainSection/MainSection';
import { AboutSection } from './AboutSection/AboutSection';
import { ServicesSection } from './ServicesSection/ServicesSection';
import { PhilosophySection } from './PhilosophySection/PhilosophySection';
import { TeamSection } from './TeamSection/TeamSection';
import { ContactSection } from './ContactSection/ContactSection';
import { Footer } from './Footer/Footer';
import { useSpring } from '@react-spring/core';
import { useCallback } from 'react';

export const Homepage = () => {
	const [{ scroll }, setScroll] = useSpring(() => ({ scroll: 0 }));
	const onScroll = useCallback(
		(e) => void setScroll({ scroll: e.targer.scrollTop / (window.innerHeight / 2) }),
		[]
	);
	return (
		<div
			css={css`
				max-width: 160rem;
				padding: 0 15rem 0 15rem;
				margin: auto;
			`}
		>
			<Navbar />
			<Parallax
				pages={9}
				css={css`
					top: 0;
					left: 0;
				`}
				onScroll={onScroll}
			>
				<ParallaxLayer
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
					offset={0.3}
					speed={1}
				>
					<MainSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
				>
					<AboutSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={1}
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
				>
					<ServicesSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={3}
					speed={1}
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
				>
					<ServicesSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={4}
					speed={1}
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
				>
					<PhilosophySection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={5}
					speed={1}
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
				>
					<div css={css``}>
						<h2
							css={css`
								max-width: 40rem;
							`}
						>
							Conoce a nuestro equipo.
						</h2>
					</div>
					{/* <TeamSection /> */}
				</ParallaxLayer>

				<Parallax offset={6}>
					{' '}
					<div
						css={css`
							flex-basis: 40%;
						`}
					>
						<h4>Néstor Cordero</h4>
						<h6>Diseñador de interfaces (UX/UI)</h6>
						<h6>Diseñador Gráfico</h6>
						<p>
							“Sin disciplina es imposible lograr grandes cosas. Es lo que nos hace
							hacer lo que tenemos que hacer independientemente de nuestro estado
							emocional.”
						</p>
					</div>
				</Parallax>
				<ParallaxLayer
					offset={6}
					speed={1}
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
				>
					<ContactSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={7}
					speed={1}
					css={css`
						max-width: 90rem;
						margin-left: 15rem;
					`}
				>
					<Footer />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};
