import React, { Suspense, lazy } from 'react';
import {
	TrComponentProps,
	AvatarSizeOptions,
	AvatarTypeOptions,
} from './TygerAvatar.types';
import './styles.css';

const avatars: AvatarTypeOptions = {
	TrChelsea: lazy(() => import(`./TrAvatars/TrChelsea`)),
	TrEric: lazy(() => import(`./TrAvatars/TrEric`)),
	TrSamantha: lazy(() => import(`./TrAvatars/TrSamantha`)),
	TrTorsten: lazy(() => import(`./TrAvatars/TrTorsten`)),
	TrIggy: lazy(() => import(`./TrAvatars/TrIggy`)),
	TrFranklin: lazy(() => import(`./TrAvatars/TrFranklin`)),
	TrImran: lazy(() => import(`./TrAvatars/TrImran`)),
	TrMaria: lazy(() => import(`./TrAvatars/TrMaria`)),
	TrRachel: lazy(() => import(`./TrAvatars/TrRachel`)),
	TrShamila: lazy(() => import(`./TrAvatars/TrShamila`)),
	TrFelix: lazy(() => import(`./TrAvatars/TrFelix`)),
	TrEnrique: lazy(() => import(`./TrAvatars/TrEnrique`)),
	TrSophia: lazy(() => import(`./TrAvatars/TrSophia`)),
	TrHarry: lazy(() => import(`./TrAvatars/TrHarry`)),
	TrHelen: lazy(() => import(`./TrAvatars/TrHelen`)),
	TrStu: lazy(() => import(`./TrAvatars/TrStu`)),
	TrNancy: lazy(() => import(`./TrAvatars/TrNancy`)),
	TrChad: lazy(() => import(`./TrAvatars/TrChad`)),
	TrCathy: lazy(() => import(`./TrAvatars/TrCathy`)),
	TrAlex: lazy(() => import(`./TrAvatars/TrAlex`)),
};

const sizes: AvatarSizeOptions = {
	'2xs': 16,
	'xs': 32,
	'sm': 48,
	'md': 96,
	'lg': 128,
	'xl': 144,
	'2xl': 192,
	'3xl': 256,
};

export default function TygerAvatar({
	name = 'TrTorsten',
	size = 'md',
	width = undefined,
	rounded = false,
}: TrComponentProps) {
	const TrComponent = avatars[name];
	const TrWidth = width ? width : sizes[size];

	return (
		<Suspense fallback="">
			{!rounded ? (
				<TrComponent width={TrWidth} />
			) : (
				<div
					className={`tyger-avatar size-${size}`}
					style={{ width: TrWidth, height: TrWidth }}>
					<TrComponent width={TrWidth} />
				</div>
			)}
		</Suspense>
	);
}
