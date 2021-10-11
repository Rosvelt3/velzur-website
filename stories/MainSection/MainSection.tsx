/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CallToActionButton } from './CallToActionButton/CallToActionButton';

export const MainSection = () => (
	<section>
		<h1>
			Construimos experiencias digitales para personas increíbles.
		</h1>
		<CallToActionButton
			css={css`
				margin-top: 2rem;
			`}
			label="Contáctanos"
		/>
	</section>
);
