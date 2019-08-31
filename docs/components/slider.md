# Sliders
- [MDC Docs](https://material.io/develop/web/components/input-controls/sliders/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/slider)

# Props
| Name | Description
| --- | ---
| value | slider's value. must be used as `bind:value`.
| min | minimum value. (default: 0)
| max | maximum value. (default: 100)
| step | slider step size. (default: 0)
| dicrete | makes the slider discrete. (default: false)
| displayMarkers | displays markers in discrete mode. (default: false)

# Example
```html
<script>
  let sliderValue = 0;
</script>
<Slider bind:value={sliderValue}>
```
