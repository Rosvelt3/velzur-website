/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PhilosophyItem } from './PhilosophyItem';

export default {
	title: 'Velzur/Homepage/PhilosophySection/PhilosophyList/PhilosophyItem',
	component: PhilosophyItem
} as ComponentMeta<typeof PhilosophyItem>;

const Template: ComponentStory<typeof PhilosophyItem> = (args) => <PhilosophyItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Eficiencia',
	description:
		'  Cumplimos adecuadamente todos los requerimientos del proyecto en el menor plazo de tiempo posible.'
};
