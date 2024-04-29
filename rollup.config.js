import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';

const mainConfig = {
	input: 'src/index.ts',
	output: [
		{
			dir: 'lib/bundle',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		typescript({ useTsconfigDeclarationDir: true }),
		filesize(),
		css({
			output: 'styles.css',
			include: ['**/*.css'],
		}),
		svgr(),
	],
};

export default mainConfig;
