import React, { Suspense, FunctionComponent } from 'react';
import {
	TAvatar,
	TTrComponent,
	TAvatarSize,
	TAvatarSizeOptions,
	TAvatarTypeOptions,
} from './TygerAvatar.types';

const getAvatar = (avatarType: TAvatar) => {
	const avatars: TAvatarTypeOptions = {
		TrChelsea: React.lazy(() => import(`./TrAvatars/TrChelsea`)),
		TrEric: React.lazy(() => import(`./TrAvatars/TrEric`)),
		TrSamantha: React.lazy(() => import(`./TrAvatars/TrSamantha`)),
		TrTorsten: React.lazy(() => import(`./TrAvatars/TrTorsten`)),
		TrIggy: React.lazy(() => import(`./TrAvatars/TrIggy`)),
		TrFranklin: React.lazy(() => import(`./TrAvatars/TrFranklin`)),
		TrImran: React.lazy(() => import(`./TrAvatars/TrImran`)),
		TrMaria: React.lazy(() => import(`./TrAvatars/TrMaria`)),
		TrRachel: React.lazy(() => import(`./TrAvatars/TrRachel`)),
		TrShamila: React.lazy(() => import(`./TrAvatars/TrShamila`)),
		TrAlex: React.lazy(() => import(`./TrAvatars/TrAlex`)),
		TrFelix: React.lazy(() => import(`./TrAvatars/TrFelix`)),
		TrEnrique: React.lazy(() => import(`./TrAvatars/TrEnrique`)),
		TrSophia: React.lazy(() => import(`./TrAvatars/TrSophia`)),
		TrHarry: React.lazy(() => import(`./TrAvatars/TrHarry`)),
		TrHelen: React.lazy(() => import(`./TrAvatars/TrHelen`)),
		TrStu: React.lazy(() => import(`./TrAvatars/TrStu`)),
		TrNancy: React.lazy(() => import(`./TrAvatars/TrNancy`)),
		TrChad: React.lazy(() => import(`./TrAvatars/TrChad`)),
		TrCathy: React.lazy(() => import(`./TrAvatars/TrCathy`)),
	};
	if (avatars[avatarType]) {
		return avatars[avatarType];
	}
	return null;
};

const getSize = (size: TAvatarSize) => {
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
	return sizes[size];
};

const TygerAvatar: FunctionComponent<TTrComponent> = (props) => {
	const { name: avatarType, size = 'md', width = null } = props;
	const TrComponent = getAvatar(avatarType);
	const TrWidth = width ? width : getSize(size);

	if (!avatarType) {
		return null;
	}

	return (
		<Suspense fallback="">
			<TrComponent {...props} width={TrWidth} />
		</Suspense>
	);
};

export default TygerAvatar;
