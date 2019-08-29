# Drawer
- [MDC Docs](https://material.io/develop/web/components/drawers/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/drawer)

# Props
| Name | Description
| --- | ---
| open | (boolean) indicates the drawer's state. must be used as `bind:open`.
| modal | makes the drawer modal, and creates a scrim.
| dismissible | makes the drawer dismissible.
| withHeader | (boolean) renders a header. you can fill it using `title` and `subtitle` slots.

# Example
```svelte
<script>
  let drawerOpen = false;
</script>
<Drawer bind:open={drawerOpen} modal withHeader>
  <span slot="title">John Doe</span>
  <span slot="subtitle">Adminstrator</span>
  <!-- probably a <List> -->
</Drawer>
<div class="mdc-drawer-app-content">
  <h1>App content</h1>
  <Button on:click={() => drawerOpen = true}>open the drawer</Button>
</div>
```
