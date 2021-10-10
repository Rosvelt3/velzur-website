/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Navbar } from './Navbar/Navbar';
import { MainSection } from './MainSection/MainSection';
import { AboutSection } from './AboutSection/AboutSection';
import { ServicesSection } from './ServicesSection/ServicesSection';

export const Homepage = () => (
	<div
		css={css`
			max-width: 160rem;
			padding: 0 6.5rem 0 6.5rem;
			margin:auto;
		`}
	>
		<Navbar />
		<MainSection />
		<div
			css={css`
				margin-top: 22rem;
			`}
		></div>
		<AboutSection />
		<div
			css={css`
				margin-top: 22rem;
			`}
		></div>
		<ServicesSection />
	</div>
);
