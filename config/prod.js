import { terser } from 'rollup-plugin-terser';
import {
  commonjs,
  resolve,
  postcss,
  svelte
} from './shared';
import pkg from '../package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' }
    ],
    plugins: [
      svelte(),
      postcss('dist/svmd.css', true),
      resolve,
      commonjs(),
      terser()
    ]
  }, {
    input: 'src/sass/index.scss',
    plugins: [postcss('dist/svmd.css', true)],
    output: {
      format: 'es',
      file: 'dist/.csstemp'
    }
  }
];
