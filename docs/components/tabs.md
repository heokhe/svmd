# Tabs
- [MDC Docs](https://material.io/develop/web/components/tabs/tab)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/tabs)

# Components
## TabBar
### Props
| Name | Description
| - | -
| active | (number, required) active tab's index. must be used as `bind:active`.
| narrow | makes each tab use the minimum horizontal space.
| stacked | places each tab's text and icon vertically.
| spanIndicatorToContent | sets up each tab's indicator to span only the content of the tab.
## Tab
### Props
| Name | Description
| - | -
| icon | tab's icon name.

# Example
```svelte
<script>
  let active = 0;
</script>
<TabBar bind:active>
  <Tab>Photos</Tab>
  <Tab icon="favorite">Favorites</Tab>
</TabBar>
<main>
  {#if active === 0}
    photos
  {:else}
    favorite items
  {/if}
</main>
```
