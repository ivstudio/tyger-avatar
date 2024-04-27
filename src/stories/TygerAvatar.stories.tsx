import type { Meta, StoryObj } from '@storybook/react';

import TygerAvatarComponent from '../TygerAvatar';

export default {
	component: TygerAvatarComponent,
	argTypes: {
		width: { control: false },
		id: { control: false },
		title: { control: false },
	},
} as Meta<typeof TygerAvatarComponent>;

type Story = StoryObj<typeof TygerAvatarComponent>;

export const TygerAvatar: Story = {
	args: {
		name: 'TrFelix',
		size: '2xl',
	},
};
