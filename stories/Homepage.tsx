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

export const Homepage = () => (
	<div
		css={css`
			max-width: 160rem;
			padding: 0 15rem 0 15rem;
			margin: auto;
		`}
	>
		<Navbar />
		<Parallax
			pages={8}
			css={css`
				top: 0;
				left: 0;
			`}
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
				<TeamSection />
			</ParallaxLayer>

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
