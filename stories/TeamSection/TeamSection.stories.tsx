/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TeamSection } from './TeamSection';

export default {
	title: 'Velzur/Homepage/TeamSection',
	component: TeamSection
} as ComponentMeta<typeof TeamSection>;

const Template: ComponentStory<typeof TeamSection> = () => <TeamSection />;

export const Default = Template.bind({});