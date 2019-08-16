# Switch
- [MDC Docs](https://material.io/develop/web/components/input-controls/switches/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/switch)

# Props
| Name | Description
| checked | Controls the switch value. must be used as `bind:checked`.

# Example
```svelte
<script>
  let checked = true;
</script>

<!-- the switch is initally checked because checked === true -->
<Switch bind:checked />
{#if checked}
  checked :)
{:else}
  not checked :(
{/if}
```
