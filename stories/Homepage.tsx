/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
		<MainSection />
		<div
			css={css`
				margin-bottom: 22rem;
			`}
		></div>
		<AboutSection />
		<div
			css={css`
				margin-bottom: 22rem;
			`}
		></div>
		<ServicesSection />
		<div
			css={css`
				margin-bottom: 22rem;
			`}
		></div>
		<PhilosophySection />
		<div
			css={css`
				margin-bottom: 22rem;
			`}
		></div>
		<TeamSection />
		<div
			css={css`
				margin-bottom: 22rem;
			`}
		></div>
		<ContactSection />
		<div
			css={css`
				margin-bottom: 22rem;
			`}
		></div>
		<Footer />
	</div>
);
