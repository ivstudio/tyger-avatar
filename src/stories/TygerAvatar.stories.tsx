import type { Meta, StoryObj } from '@storybook/react';

import TygerAvatarComponent from '../TygerAvatar';

export default {
	component: TygerAvatarComponent,
	argTypes: {
		width: { table: { disable: true } },
		id: { table: { disable: true } },
		title: { table: { disable: true } },
	},
} as Meta<typeof TygerAvatarComponent>;

type Story = StoryObj<typeof TygerAvatarComponent>;

export const TygerAvatar: Story = {
	args: {
		name: 'TrFelix',
		size: '2xl',
		variant: 'default',
	},
};
