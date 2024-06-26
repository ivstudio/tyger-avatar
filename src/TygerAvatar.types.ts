import React from 'react';

export type AvatarVariants =
	| 'TrChelsea'
	| 'TrEric'
	| 'TrSamantha'
	| 'TrTorsten'
	| 'TrIggy'
	| 'TrFranklin'
	| 'TrImran'
	| 'TrMaria'
	| 'TrRachel'
	| 'TrShamila'
	| 'TrFelix'
	| 'TrEnrique'
	| 'TrSophia'
	| 'TrHarry'
	| 'TrHelen'
	| 'TrStu'
	| 'TrNancy'
	| 'TrChad'
	| 'TrCathy'
	| 'TrAlex';

export type AvatarSize =
	| '2xs'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl';

export interface TrComponentProps {
	name?: AvatarVariants;
	title?: string;
	id?: string;
	width?: number;
	size?: AvatarSize;
	rounded?: boolean;
}
export type AvatarComponent = React.LazyExoticComponent<
	React.FC<TrComponentProps>
>;
export type AvatarSizeOptions = { [key in AvatarSize]: number };
export type AvatarTypeOptions = Record<AvatarVariants, AvatarComponent>;
