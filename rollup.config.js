import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
const svgr = require('@svgr/rollup').default;
const packageJson = require('./package.json');

export default {
	input: ['src/index.tsx'],
	output: [
		{
			file: packageJson.module,
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
