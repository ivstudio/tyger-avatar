import React, { Suspense, FunctionComponent } from 'react';
import {
	TAvatar,
	TTrComponent,
	TAvatarSize,
	TAvatarOptions,
} from './TygerAvatar.types';

const getAvatar = (name: TAvatar) => {
	return React.lazy(() => import(`./TrAvatars/${name}`));
};

const getSize = (size: TAvatarSize) => {
	const sizes: TAvatarOptions = {
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
	const { name, size = 'md', width = null } = props;
	const TrComponent = getAvatar(name);
	const TrWidth = width ? width : getSize(size);

	return (
		<Suspense fallback="">
			<TrComponent {...props} width={TrWidth} />
		</Suspense>
	);
};

export default TygerAvatar;
