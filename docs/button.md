# Buttons
- [MDC Docs](https://material.io/develop/web/components/buttons/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/button)

# Props
| Name | Description
| --- | ---
| outlined | draws an outline around the button.
| dense | makes the button slightly smaller.
| raised | gives the button a background color (primary) and box shadow.
| unelevated | behaves like `raised`, but without shadow.
| href | converts the button into an anchor that points to the specified URL.

# Examples
```html
<!-- ripple effect gets activated when the component is mounted -->
<Button on:click={handleClick}>flat button</Button>
<Button outlined>outlined</Button>
<Button dense>smaller button</Button>
<Button raised>raised</Button>
<Button unelevated>unelevated</Button>
<Button href="http://some.url">
  this one is a link
</Button>
<Button href="http://some.url" target="_blank">
  this one opens in a new page
</Button>
```
