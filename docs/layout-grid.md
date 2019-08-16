# Layout grid
- [MDC Docs](https://material.io/develop/web/components/layout-grid/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/layout-grid)

# Components
## Grid
> also exported as `LayoutGrid`
### Props
| Name | Description
| --- | ---
| align | aligns the grid to a direction (possible values: left, right). grid is aligned to center by default.
| fixedWidth | tells each column to have a certain width.
## Cell
> also exported as `LayoutCell`.
### Props
| Name | Description
| --- | ---
| span | (integer between 1 and 12) indicates how many columns this cell will take. (default: 4)
| phone | `span` on mobile devices.
| tablet | `span` on tablets.
| desktop | `span` on desktop screens.
| order | (integer between 1 and 12) re-orders item. by default, items are positioned in the source order.
| align | (`'top' | 'middle' | 'bottom'`) aligns the cell in the given direction. items take up the height of their corresponding row, by default.
