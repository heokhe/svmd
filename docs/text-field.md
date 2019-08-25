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
| outlined | draws an outline around the input, and renders a "notched outline".
| leadingIcon | icon to render before the input.
| trailingIcon | icon to render after the input.

# Example
```svelte
<script>
  let name = ""; // initial value
  let number = 20;
  function validate(event) { /* ... */ }
</script>

<TextField label="Your Name" placeholder="John Doe" bind:value={name} on:change={validate} />
<TextField label="Your Name" placeholder="John Doe" leadingIcon="person" bind:value={name} on:change={validate} />
<TextField type="number" bind:value={number} label="Your Age" />
```
