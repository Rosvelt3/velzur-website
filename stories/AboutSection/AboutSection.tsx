/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const AboutSection = () => (
	<section>
		<h2
			css={css`
				text-align: center;
				margin-bottom: 6.25rem;
			`}
		>
			¿Quiénes somos?
		</h2>
		<div
			css={css`
				display: flex;
				align-items: center;
			`}
		>
			<h3
				css={css`
					flex-basis: 50%;
				`}
			>
				Un buena experiencia digital no pasa en la pantalla.
			</h3>
			<div
				css={css`
					flex-basis: 50%;
				`}
			>
				<p>
					Al igual que en la vida misma, las emociones dictan nuestras decisiones. Si
					viviste algo que te provocó emociones positivas eres mucho más propenso a
					repetirlo.
				</p>
				<p>
					En Velzur, creemos que lo más importante para un producto exitoso es el impacto
					emocional que genera. Por eso nos aseguramos que cada segundo cuente poniendo
					siempre por delante al humano que hay detrás. En definitiva, somos humanos que
					trabajamos por humanos.
				</p>
			</div>
		</div>
	</section>
);
