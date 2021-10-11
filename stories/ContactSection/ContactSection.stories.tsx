/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactSection } from './ContactSection';

export default {
	title: 'Velzur/Homepage/ContactSection',
	component: ContactSection
} as ComponentMeta<typeof ContactSection>;

const Template: ComponentStory<typeof ContactSection> = () => <ContactSection />;

export const Default = Template.bind({});