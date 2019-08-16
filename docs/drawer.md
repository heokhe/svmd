# Drawer
- [MDC Docs](https://material.io/develop/web/components/drawers/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/drawer)

# Props
| Name | Description
| --- | ---
| open | (boolean) indicates the drawer's state. must be used as `bind:open`.
| modal | makes the drawer modal, and creates a scrim.
| dismissible | makes the drawer dismissible.
| title | drawer header title. if omitted, no header is rendered.
| subtitle | drawer header subtitle.

# Example
```svelte
<script>
  let drawerOpen = false;
</script>
<Drawer
  bind:open={drawerOpen}
  title="John Doe"
  subtitle="Adminstrator"
  modal>
  <!-- probably a <List> -->
</Drawer>
<div class="mdc-drawer-app-content">
  <h1>App content</h1>
  <Button on:click={() => drawerOpen = true}>open the drawer</Button>
</div>
```
