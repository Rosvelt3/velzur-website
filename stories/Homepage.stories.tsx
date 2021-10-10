/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Homepage } from './Homepage';

export default {
	title: 'Velzur/Homepage',
	component: Homepage
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = () => <Homepage />;

export const Default = Template.bind({});