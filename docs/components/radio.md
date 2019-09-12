# Checkbox
- [MDC Docs](https://material.io/develop/web/components/input-controls/radios)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/radio)

# Props
| Name | Description
| - | -
| group | the variable to control. must be used as `bind:group`.
| value | the radio button's value.
| disabled | controls the input's `disabled` attribute. 

# Example
```svelte
<script>
  let colors = ['red', 'blue', 'green'];
  let selectedColor = 'red';
</script>

{#each colors as color}
  <FormField>
    <Radio bind:group={selectedColor} value={color}>
    <label>{color}</label>
    <br>
  </FormField>
{/each}
```
Also see [the documentation on FormField component](form-field.md).
