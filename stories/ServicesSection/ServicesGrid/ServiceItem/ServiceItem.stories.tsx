/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ServiceItem } from './ServiceItem';

export default {
	title: 'Velzur/Homepage/ServicesSection/ServiceGrid/ServiceItem',
	component: ServiceItem
} as ComponentMeta<typeof ServiceItem>;

const Template: ComponentStory<typeof ServiceItem> = (args) => <ServiceItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Branding',
	description:
		'Un aspecto determinante que ayuda a las empresas a posicionarse dentro de un nicho. Es una inversión que a largo plazo ayudará a aumentar las ventas, atraer nuevos clientes y sobretodo ser memorable.',
	itemsList: [
		'Diseño de logo',
		'Identidad de marca',
		'Publicidad para redes sociales',
		'Lenguaje visual',
		'Copywriting'
	]
};
