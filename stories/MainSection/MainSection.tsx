/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CallToActionButton } from './CallToActionButton/CallToActionButton';

export const MainSection = () => (
	<section>
		<h1>
			Construimos <br /> experiencias digitales <br /> para personas <br /> increíbles.
		</h1>
		<CallToActionButton
			css={css`
				margin-top: 4.8rem;
			`}
			label="Contáctanos"
		/>
	</section>
);
