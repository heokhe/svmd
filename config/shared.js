import path from 'path';
import sveltePlugin from 'rollup-plugin-svelte';
import postcssPlugin from 'rollup-plugin-postcss';
import nodeResolve from 'rollup-plugin-node-resolve';

export const svelte = ({ dev = false, ssr = false } = {}) => {
  return sveltePlugin({
    emitCss: true,
    dev,
    ...ssr && {
      generate: 'ssr'
    }
  });
};
export const postcss = (dest, minimize = false) => postcssPlugin({
  minimize,
  extract: dest,
  use: [
    ['sass', {
      includePaths: [path.resolve('node_modules')]
    }]
  ]
});
export const resolve = nodeResolve({
  browser: true,
  dedupe: ['svelte', 'svelte/*']
});
export { default as commonjs } from 'rollup-plugin-commonjs';
