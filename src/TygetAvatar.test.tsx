import React from 'react';
import { render, act, waitFor } from './tests/testUtils';
import '@testing-library/jest-dom';

import TygerAvatar, { sizes } from './TygerAvatar';
import { TrComponentProps, AvatarVariants } from './TygerAvatar.types';

const avatarId = '[data-name="trAvatar"]';
const avatarNames = [
	'TrChelsea',
	'TrEric',
	'TrSamantha',
	'TrTorsten',
	'TrIggy',
	'TrFranklin',
	'TrImran',
	'TrMaria',
	'TrRachel',
	'TrShamila',
	'TrFelix',
	'TrEnrique',
	'TrSophia',
	'TrHarry',
	'TrHelen',
	'TrStu',
	'TrNancy',
	'TrChad',
	'TrCathy',
	'TrAlex',
] as AvatarVariants[];

const renderTygerAvatar = (props: TrComponentProps) => {
	return act(() => render(<TygerAvatar {...props} />));
};

describe('TygerAvatar', () => {
	it('renders the default avatar', async () => {
		const { container } = await renderTygerAvatar({ size: 'lg' });
		const avatar = container.querySelector(avatarId);
		expect(avatar).toBeInTheDocument();
	});

	Object.entries(sizes).forEach(([size, width]) => {
		it(`should set the correct width for size "${size}"`, async () => {
			const { container } = await renderTygerAvatar({
				size: size as keyof typeof sizes,
			});
			const avatar = container.querySelector(avatarId);
			expect(avatar).toHaveAttribute('width', width.toString());
		});
	});

	avatarNames.forEach((name: AvatarVariants) => {
		it(`should render the "${name}" avatar`, async () => {
			const { container } = await renderTygerAvatar({ name });
			const avatarName = name.replace('Tr', '').toLowerCase();
			waitFor(() =>
				expect(
					container.querySelector(`#tr${avatarName}_svg__avatar`)
				).toBeInTheDocument()
			);
		});
	});

	it('should set the correct custom width', async () => {
		const customWidth = 30;
		const { container } = await renderTygerAvatar({ width: customWidth });
		const avatar = container.querySelector(avatarId);
		expect(avatar).toHaveAttribute('width', customWidth.toString());
	});

	it('should render the avatar with rounded class', async () => {
		const { container } = await renderTygerAvatar({ rounded: true });
		const avatar = container.querySelector('.tyger-avatar');
		expect(avatar).toBeInTheDocument();
	});
});
