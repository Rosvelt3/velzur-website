/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainSection } from './MainSection';

export default {
	title: 'Velzur/Homepage/MainSection',
	component: MainSection
} as ComponentMeta<typeof MainSection>;

const Template: ComponentStory<typeof MainSection> = () => <MainSection />;

export const Default = Template.bind({});