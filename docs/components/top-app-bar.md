# Top App Bar
- [MDC Docs](https://material.io/develop/web/components/top-app-bar/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar)

# Props
| Name | Description
| --- | ---
| title | top app bar's title.
| noNavIcon | if true, nav icon button won't be rendered.
| dense | slightly reduces top app bar's height.
| short | activates short variant.
| alwaysClosed | makes the bar always closed when `short === true`.
| fixed | applies `position: fixed` to the top app bar.
| prominent | increases top app bar's height (prominent variant).

# Events
`nav-icon-click` event is fired when nav icon button is clicked. This event is useful for communicating with [drawers](./drawer).
```svelte
<script>
  let open = false;
</script>
<TopAppBar on:nav-icon-click={() => open = true} />
<Drawer modal bind:open />
```
