/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ServiceGrid } from './ServicesGrid';

export default {
	title: 'Velzur/Homepage/ServicesSection/ServicesGrid',
	component: ServiceGrid
} as ComponentMeta<typeof ServiceGrid>;

const Template: ComponentStory<typeof ServiceGrid> = (args) => <ServiceGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
	services: [
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		}
	]
};
