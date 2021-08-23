import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TygerAvatar from './TygerAvatar';

export default {
	title: 'Avatars',
	component: TygerAvatar,
	args: {
		name: 'Chelsea',
		size: 'lg',
	},
} as ComponentMeta<typeof TygerAvatar>;

const Template: ComponentStory<typeof TygerAvatar> = (args) => (
	<TygerAvatar {...args} />
);

export const TygerChelsea = Template.bind({});
TygerChelsea.args = {
	name: 'Chelsea',
};

export const TygerTorsen = Template.bind({});
TygerTorsen.args = {
	name: 'Torsten',
};

export const TygerSamantha = Template.bind({});
TygerSamantha.args = {
	name: 'Samantha',
};

export const TygerEric = Template.bind({});
TygerEric.args = {
	name: 'Eric',
};
