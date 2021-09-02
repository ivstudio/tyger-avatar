import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TrEric } from '../TrAvatars';

export default {
	title: 'Avatars',
	component: TrEric,
	args: {
		title: 'Add your svg title',
		titleId: 'svgId',
	},
} as ComponentMeta<typeof TrEric>;

const Template: ComponentStory<typeof TrEric> = (args) => <TrEric {...args} />;

export const Eric = Template.bind({});
