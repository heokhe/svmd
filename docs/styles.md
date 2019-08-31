# Dealing with SVMD's styles
## Basic Usage
Just include `svmd/dist/svmd.css` in your app:
```js
import 'svmd/dist/svmd.css';
```
## Sass files
You may want to import sass files, for the sake of customization. `svmd/src/sass/index.scss` includes styles for every single component:
```scss
@import 'svmd/src/sass/index';
```
Or, you can import styles for every individual component:
```scss
@import 'svmd/src/sass/Button';
@import 'svmd/src/sass/Slider';
@import 'svmd/src/sass/Fab';
@import 'svmd/src/sass/TopAppBar';
```
> NOTE: Usually modules are prefixed with a tilde (like `@import '~svmd/src/sass/index'`), but you can't do with SVMD. You should use `node-sass` with [includePaths](https://github.com/sass/node-sass#includepaths) option. ([Solution for Rollup users](https://github.com/egoist/rollup-plugin-postcss/issues/72#issuecomment-368520888))

## Changing theme colors
There are two ways for customizing the colors of your app:

### CSS Variables
```css
:root {
  --mdc-theme-primary: red;
  --mdc-theme-secondary: blue;
}
```
See [the docs on material.io](https://material.io/develop/web/components/theme#non-sass-customization) for more info.

### Sass variables
Just change the variables before importing the components:
```scss
$mdc-theme-primary: red;
$mdc-theme-secondary: blue;
@import 'svmd/src/sass/index';
```
If you want to import colors from the material design palette, use the following approach:
```scss
// actually it's a dependency of SVMD:
@import '@material/theme/color-palette';
$mdc-theme-primary: $material-color-indigo-500;
// ...
```
See [the docs on material.io about Sass customization](https://material.io/develop/web/components/theme#sass-mixins-variables-and-functions) for more info.
