import React, { Suspense, lazy } from 'react';
const TrChealsea = lazy(() => import('../src/TrChelsea'));
const TrSamantha = lazy(() => import('../src/TrSamantha'));
const TrTorsten = lazy(() => import('../src/TrTorsten'));
const TrEric = lazy(() => import('../src/TrEric'));

export type TAvatarName = 'Eric' | 'Chelsea' | 'Samantha' | 'Torsten';
export type TSize = 'sm' | 'md' | 'lg' | 'xlg';
export interface ITygerAvatar {
	name?: TAvatarName;
	title?: string;
	titleId?: string;
	size?: TSize;
	customSize?: number;
}

const getSize = (size: TSize, customSize?: number) => {
	if (customSize) {
		return customSize;
	}

	const sizes = {
		sm: 40,
		md: 80,
		lg: 160,
		xlg: 240,
	};
	return sizes[size];
};

const TygerAvatar = ({
	name = 'Samantha',
	title,
	titleId,
	size = 'sm',
	customSize,
}: ITygerAvatar) => {
	const getProps = (props = {}) => ({
		title: title || name,
		titleId,
		name,
		width: getSize(size, customSize),
		...props,
	});

	return (
		<Suspense fallback={<></>}>
			{
				{
					Eric: <TrEric {...getProps()} />,
					Chelsea: <TrChealsea {...getProps()} />,
					Samantha: <TrSamantha {...getProps()} />,
					Torsten: <TrTorsten {...getProps()} />,
				}[name]
			}
		</Suspense>
	);
};

export default TygerAvatar;
