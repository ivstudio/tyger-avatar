export const avatarComponents = [
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
	'TrAlex',
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
] as const;

export type TAvatar = (typeof avatarComponents)[number];

export type TAvatarSize =
	| 'xxsm'
	| 'xsm'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xlg'
	| 'xxlg'
	| 'xxxlg';

export interface TTrComponent {
	name: TAvatar;
	title?: string;
	id?: string;
	width?: number;
	size?: TAvatarSize;
}

export type TAvatarSizeOptions = { [key in TAvatarSize]: number };
export type TAvatarTypeOptions = { [key in TAvatar]: any };
