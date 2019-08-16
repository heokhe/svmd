# Text fields
- [MDC Docs](https://material.io/develop/web/components/input-controls/text-field/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/text-field)
> Text field component is exported as `TextField`, but also `Input`.

# Props
| Name | Description
| --- | ---
| value | input's value. must be used as `bind:value`.
| type | input's type. (default: `"text"`)
| label | creates a "floating label" containing the given value.
| placeholder | input's placeholder text.
| fullwidth | makes the input take all of the available horizontal space.

# Example
```svelte
<script>
  let name = ""; // initial value
  function validate(event) { /* ... */ }
</script>
<TextField label="Your Name" placeholder="John Doe" bind:value={name} on:change={validate} />
```
