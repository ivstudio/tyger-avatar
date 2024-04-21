import React, { Suspense, FunctionComponent, lazy, memo } from 'react';
import {
	TAvatar,
	TTrComponent,
	TAvatarSize,
	TAvatarSizeOptions,
	TAvatarTypeOptions,
} from './TygerAvatar.types';

const avatars: TAvatarTypeOptions = {
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

const sizes: TAvatarSizeOptions = {
	xxsm: 16,
	xsm: 32,
	sm: 48,
	md: 96,
	lg: 128,
	xlg: 144,
	xxlg: 192,
	xxxlg: 256,
};

const getAvatar = (avatarType: TAvatar) =>
	avatars[avatarType] || avatars['TrChelsea'];

const getSize = (size: TAvatarSize) => sizes[size] || sizes['md'];

const TygerAvatar: FunctionComponent<TTrComponent> = memo((props) => {
	const { name, size = 'md', width = null } = props;
	const TrComponent = getAvatar(name);
	const TrWidth = width ? width : getSize(size);

	if (!name) {
		return null;
	}

	return (
		<Suspense fallback="">
			<TrComponent {...props} width={TrWidth} />
		</Suspense>
	);
});

export default TygerAvatar;
