import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import cssnano from 'cssnano';

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
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		babel({
			exclude: 'node_modules/**',
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			babelHelpers: 'bundled',
		}),
		filesize(),
		postcss({
			plugins: [cssnano()],
			extract: 'styles.css',
			include: ['**/*.css'],
		}),
		svgr(),
		terser(),
		visualizer({ open: true, filename: 'visualizer/bundle-stats.html' }),
	],
};

export default mainConfig;
