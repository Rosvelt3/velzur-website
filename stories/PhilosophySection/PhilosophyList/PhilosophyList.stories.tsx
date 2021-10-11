/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PhilosophyList } from './PhilosophyList';

export default {
	title: 'Velzur/Homepage/PhilosophySection/PhilosophyList',
	component: PhilosophyList
} as ComponentMeta<typeof PhilosophyList>;

const Template: ComponentStory<typeof PhilosophyList> = (args) => <PhilosophyList {...args} />;

export const Default = Template.bind({});
Default.args = {
	philosophies: [
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
	]
};
