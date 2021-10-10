/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ServicesSection } from './ServicesSection';

export default {
	title: 'Velzur/Homepage/ServicesSection',
	component: ServicesSection
} as ComponentMeta<typeof ServicesSection>;

const Template: ComponentStory<typeof ServicesSection> = () => <ServicesSection />;

export const Default = Template.bind({});