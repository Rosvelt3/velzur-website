/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import { css } from '@emotion/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import linkedinIcon from '../../public/images/linkedin-icon.svg';

export const TeamSection = () => (
	<section
		css={css`
			display: flex;
			align-items: center;
		`}
	>
		<div
			css={css`
				flex-basis: 60%;
			`}
		>
			<h2
				css={css`
					max-width: 40rem;
				`}
			>
				Conoce a nuestro equipo.
			</h2>
		</div>

		<div
			css={css`
				flex-basis: 40%;
			`}
		>
			<h4>Néstor Cordero</h4>
			<h6>Diseñador de interfaces (UX/UI)</h6>
			<h6>Diseñador Gráfico</h6>
			<p>
				“Sin disciplina es imposible lograr grandes cosas. Es lo que nos hace hacer lo que
				tenemos que hacer independientemente de nuestro estado emocional.”
			</p>
			<Image src={linkedinIcon} width={32} height={32} />
		</div>
	</section>
);
