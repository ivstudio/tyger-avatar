import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TygerAvatar from '../index';

export default {
	title: 'Avatars',
	component: TygerAvatar,
	args: {
		name: 'TrFelix',
		size: 'xxlg',
	},
} as ComponentMeta<typeof TygerAvatar>;

const Template: ComponentStory<typeof TygerAvatar> = (args) => (
	<TygerAvatar {...args} />
);

export const Avatars = Template.bind({});
