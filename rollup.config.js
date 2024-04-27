import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';

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
		typescript({ useTsconfigDeclarationDir: true }),
		filesize(),
		svgr(),
	],
};

export default mainConfig;
