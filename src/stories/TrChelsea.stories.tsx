import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TrChelsea } from '../TrAvatars';

export default {
	title: 'Avatars',
	component: TrChelsea,
	args: {
		width: 160,
		title: 'Add your svg title',
		titleId: 'svgId',
	},
} as ComponentMeta<typeof TrChelsea>;

const Template: ComponentStory<typeof TrChelsea> = (args) => (
	<TrChelsea {...args} />
);

export const Chelsea = Template.bind({});
