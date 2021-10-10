/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CallToActionButton } from './CallToActionButton';

export default {
	title: 'Velzur/Homepage/MainSection/CallToActionButton',
	component: CallToActionButton
} as ComponentMeta<typeof CallToActionButton>;

const Template: ComponentStory<typeof CallToActionButton> = (args) => (
	<CallToActionButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
	label: 'Contáctanos'
};
