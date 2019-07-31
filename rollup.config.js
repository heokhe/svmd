import svelte from 'rollup-plugin-svelte';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
// import postcssImport from 'postcss-import';
import { resolve } from 'path';
import pkg from './package.json';

const isInProduction = !process.env.ROLLUP_WATCH;

export default {
  input: isInProduction ? 'src/index.js' : 'examples/main.js',
  output: !isInProduction ? {
    sourcemap: false,
    format: 'iife',
    name: 'app',
    file: 'examples/bundle.js'
  } : [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'cjs', name: pkg.name }
  ],
  plugins: [
    svelte({
      dev: !isInProduction,
      emitCss: true
    }),
    postcss({
      use: [
        ['sass', {
          includePaths: [resolve('node_modules')]
        }]
      ],
      extract: 'dist/main.css'
    }),
    nodeResolve({
      browser: true
      // dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),
    !isInProduction && livereload(),
    isInProduction && terser()
  ],
  watch: {
    clearScreen: false
  }
};
