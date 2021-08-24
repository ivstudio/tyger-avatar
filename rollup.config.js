import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import multi from '@rollup/plugin-multi-entry';
const packageJson = require('./package.json');

export default {
	input: ['./src/Avatars/index.tsx', './src/TygerAvatar/index.tsx'],
	output: {
		dir: 'dist',
	},
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript({ useTsconfigDeclarationDir: true }),
		filesize(),
		multi(),
	],
};

// {
// 	file: packageJson.module,
// 	format: 'esm',
// 	sourcemap: true,
// },
