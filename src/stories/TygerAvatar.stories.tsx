import type { Meta, StoryObj } from '@storybook/react';

import TygerAvatar from '../TygerAvatar';

const meta: Meta<typeof TygerAvatar> = {
	title: 'Avatars',
	component: TygerAvatar,
	args: {
		name: 'TrFelix',
		size: 'xxlg',
	},
};

export default meta;
type Story = StoryObj<typeof TygerAvatar>;

export const Primary: Story = {};
