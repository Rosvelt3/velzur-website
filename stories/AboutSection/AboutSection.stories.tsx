/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutSection } from './AboutSection';

export default {
	title: 'Velzur/Homepage/AboutSection',
	component: AboutSection
} as ComponentMeta<typeof AboutSection>;

const Template: ComponentStory<typeof AboutSection> = () => <AboutSection />;

export const Default = Template.bind({});