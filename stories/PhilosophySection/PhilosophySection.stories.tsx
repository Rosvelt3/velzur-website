/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PhilosophySection } from './PhilosophySection';

export default {
	title: 'Velzur/Homepage/PhilosophySection',
	component: PhilosophySection
} as ComponentMeta<typeof PhilosophySection>;

const Template: ComponentStory<typeof PhilosophySection> = () => <PhilosophySection />;

export const Default = Template.bind({});
