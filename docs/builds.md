# SVMD's Various builds
All builds are available at `svmd/dist`.

| File | Format | Dedicated `package.json` field | For SSR
| - | - | - | -
| `svmd.js` | CommonJS | `main` | ✖
| `svmd.es.js` | ES Module | `module` | ✖
| `svmd.ssr.js` | CommonJS | `main` | ✔
| `svmd.ssr.es.js` | ES Module | `main` | ✔

> You must use SSR builds if you want to render the components in the server-side.

