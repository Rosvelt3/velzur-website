/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavbarMenu } from './NavbarMenu';

export default {
	title: 'Velzur/Homepage/Navbar/NavbarMenu',
	component: NavbarMenu
} as ComponentMeta<typeof NavbarMenu>;

const Template: ComponentStory<typeof NavbarMenu> = (args) => <NavbarMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
	menuItems: [
		{
			text: 'Home',
			path: '/'
		},
		{
			text: 'Nosotros',
			path: '/nosotros'
		},
		{
			text: 'Servicios',
			path: '/servicios'
		},
		{
			text: 'Equipo',
			path: '/equipos'
		}
	]
};
