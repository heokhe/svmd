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
      resolve,
      commonjs(),
      svelte(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/svmd.ssr.js', format: 'cjs' },
      { file: 'dist/svmd.ssr.es.js', format: 'es' }
    ],
    plugins: [
      resolve,
      commonjs(),
      svelte({ ssr: true }),
      terser()
    ]
  },
  {
    input: 'src/sass/index.scss',
    plugins: [postcss('dist/svmd.css', true)],
    output: {
      format: 'es',
      file: 'dist/.csstemp'
    }
  }
];
