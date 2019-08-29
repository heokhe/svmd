import livereload from 'rollup-plugin-livereload';
import {
  svelte, postcss, resolve, commonjs
} from './shared';

export default {
  input: 'examples/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'examples/dist/bundle.js'
  },
  plugins: [
    svelte(true),
    postcss('examples/dist/bundle.css'),
    resolve,
    commonjs(),
    livereload('..', {
      extraExts: ['scss']
    })
  ]
};
