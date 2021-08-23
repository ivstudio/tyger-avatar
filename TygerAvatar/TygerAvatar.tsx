import React from 'react';
import {
	TygerEric,
	TygerChelsea,
	TygerSamantha,
	TygerTorsten,
} from '../src/index';

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
		<>
			{
				{
					Eric: <TygerEric {...getProps()} />,
					Chelsea: <TygerChelsea {...getProps()} />,
					Samantha: <TygerSamantha {...getProps()} />,
					Torsten: <TygerTorsten {...getProps()} />,
				}[name]
			}
		</>
	);
};

export default TygerAvatar;
