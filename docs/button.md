# Buttons
- [MDC Docs](https://material.io/develop/web/components/buttons/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/button)

# Examples
```html
<!-- ripple effect gets activated when the component is mounted -->
<Button on:click={handleClick}>flat button</Button>
<Button outlined>outlined button</Button>
<Button dense>dense (slightly smaller) button</Button>
<Button raised>
  raised button (shadow + background color)
</Button>
<Button unelevated>
  unelevated button (`raised` without shadow)
</Button>

<Button href="http://some.url">
  this one is a link
</Button>
<Button href="http://some.url" target="_blank">
  this one opens in a new page
</Button>
```
