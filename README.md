# SVMD
SVMD is a set of Material design components for Svelte. Actually, it's a port of [Google's MDC](https://material.io/develop/web) using the _simple approach_.

# Installation
```sh
npm i svmd # npm
yarn add svmd # yarn
```

# Usage
SVMD has a variety of components, and you can import them like this:
```js
import { Button, Slider, Fab } from 'svmd';
```
Also, you should import their styles:
```js
import 'svmd/dist/svmd.css';
```
> **Note**: `svmd.css` file bundles the styles of every single component. It's better to use something like PurgeCSS to remove unwanted CSS code.

## Customization
Use the following approach:
```scss
// app.scss

$mdc-theme-primary: red;
$mdc-theme-secondary: blue;
// ...
@import "~svmd/src/sass"; // or "~svmd/src/sass/index"
```
Then, import `./app.scss` instead of `svmd.css`.

# Documentation
Documentation is **Work In Progress**. See [docs folder](./docs).
