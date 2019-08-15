# SVMD
SVMD is a set of Material design components for Svelte. Actually, it's a port of [Google's MDC](https://material.io/develop/web) using the _simple approach_.

# Installation
```sh
npm i svmd # npm
yarn add svmd # yarn
```

# Usage
```html
<!-- App.svelte -->
<script>
  import { Button } from 'svmd';
</script>

<Button raised>Click me</Button>
```
```js
// main.js
import App from './App.svelte';
import 'svmd/dist/svmd.css';

new App({ ... })
```
> **Note**: `svmd.css` bundles the styles of every single component. It's better to use something like PurgeCSS to remove unwanted CSS code.

## Customization
Use the following approach:
```scss
// app.scss

$mdc-theme-primary: red;
$mdc-theme-secondary: blue;
// ...
@import "~svmd/src/sass";
```
Then, import `./app.scss` instead of `svmd.css` in `main.js`.

# Documentation
Documentation is **Work In Progress**. See [docs folder](./docs).
