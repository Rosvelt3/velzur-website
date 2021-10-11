/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PhilosophyList } from './PhilosophyList/PhilosophyList';

const philosophies = [
	{
		title: 'Eficacia',
		description:
			'Nuestros productos funcionan de la forma más óptima posible de acuerdo con los estándares de la industria.'
	},
	{
		title: 'Eficiencia',
		description:
			'Cumplimos adecuadamente todos los requerimientos del proyecto en el menor plazo de tiempo posible.'
	},
	{
		title: 'Concentración profunda',
		description:
			'La única forma de entregar un trabajo con altos niveles de calidad es mediante la concentración prolongada  y con propósito.'
	}
];

export const PhilosophySection = () => (
	<div>
		<h2
			css={css`
				text-align: center;
				margin-bottom: 4rem;
			`}
		>
			Nuestra tríada filosófica de trabajo.
		</h2>
		<PhilosophyList philosophies={philosophies} />
	</div>
);
