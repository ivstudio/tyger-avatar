import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
const svgr = require('@svgr/rollup').default;

const avatarComponents = [
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
];

const avatarsConfig = avatarComponents.map((name) => ({
	input: `src/TrAvatars/${name}.tsx`,
	output: {
		file: `lib/${name}.js`,
		format: 'esm',
		sourcemap: true,
	},
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript({ useTsconfigDeclarationDir: true }),
		filesize(),
		svgr(),
	],
}));

const TygerAvatarConfig = {
	input: 'src/TygerAvatar.tsx',
	output: [
		{
			dir: 'lib/TygerAvatar.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript({ useTsconfigDeclarationDir: true }),
		filesize(),
		svgr(),
	],
};

const mainConfig = {
	input: 'src/index.ts',
	output: [
		{
			dir: 'lib/index.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript({ useTsconfigDeclarationDir: true }),
		filesize(),
		svgr(),
	],
};

export default [...avatarsConfig, TygerAvatarConfig, mainConfig];
