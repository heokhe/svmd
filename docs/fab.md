# Floating action buttons
- [MDC Docs](https://material.io/develop/web/components/buttons/floating-action-buttons/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/fab)

# Examples
```html
<!-- default -->
<Fab icon="add" />
<!-- `mini` makes a bit smaller -->
<Fab icon="add" mini />
<!-- extended fab -->
<Fab icon="add" extended>create</Fab>
<!-- use `iconTrailing` to render the icon after the text label -->
<Fab icon="add" extended iconTrailing>create</Fab>
<!-- also, you can make a "label-only" fab -->
<Fab extended>create</Fab>
```

# Fixed FABs
In addition to original props, `<Fab>` has a `fixed` boolean prop, which gives the button `position: fixed`.
```html
<Fab fixed icon="edit" />
```
