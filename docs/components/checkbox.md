# Checkbox
- [MDC Docs](https://material.io/develop/web/components/input-controls/checkboxes/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/checkbox)

# Props
| Name | Description
| - | -
| checked | indicates the checkbox state. must be used as `bind:checked`.
| disabled | controls the input's `disabled` attribute. 

# Example
```svelte
<script>
  let agreed = false;
</script>

<FormField>
  <Checkbox id="my-checkbox" bind:checked={agreed} />
  <label for="my-checkbox">I agree the to terms of service.</label>
</FormField>
```
Also see [the documentation on FormField component](form-field.md).
