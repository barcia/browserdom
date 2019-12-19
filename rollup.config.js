import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

module.exports = {
	input: 'src/index.js',
	output: {
		name: 'BrowserDOM',
		file: 'dist/browserdom.min.js',
		format: 'umd',
	},
	plugins: [
		babel({
			exclude: 'node_modules/**', // only transpile our source code
		}),
		terser(),
	],
};
