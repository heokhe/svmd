# Layout grid
- [MDC Docs](https://material.io/develop/web/components/layout-grid/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/layout-grid)

# `<Grid>`
> `Grid` is also exported as `LayoutGrid`.
## Usage
```html
<!-- default -->
<Grid />
<!--
  aligns the grid to a direction (possible values: left, right). grid is aligned to center by default.
-->
<Grid align="left" />
<!-- tells each column to have a certain width. -->
<Grid fixedWidth />
```

# `<Cell>`
> `Cell` is also exported as `LayoutCell`.
## Usage
```html
<!--
  `span` indicates how many columns this cell will take.
  its value is an integer between 1 and 12. defaults to 4.
-->
<Cell span="5" />
<Cell span={7} />
<!--
  there are `phone`, `tablet` and `desktop` props that behave like `span`, but for a specific device type.
-->
<Cell phone="12" tablet="8" desktop="7" />
<!--
  by default, items are positioned in the source order.
  you can re-order them by using the `order` prop, where its value is an integer between 1 and 12.
-->
<Cell span="4" order="2" />
<!--
  items are defined to stretch, by default, taking up the height of their corresponding row.
  you can switch to a different behavior by using `align` prop,
  where its value is one of 'top', 'middle' or 'bottom'.
-->
<Cell align="top" />
```
