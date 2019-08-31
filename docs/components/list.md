# Lists
- [MDC Docs](https://material.io/develop/web/components/lists/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/list)

# Components
## List
### Props
| Name | Description
| - | -
| dense | reduces the height of items.
| twoLine | use it to place two lines in at item, instead of one.

## ListItem
### Props
| Name | Description
| - | -
| tabindex | value for `tabindex` HTML attribute.
> **Note**: It is required to use a `tabindex` (usually `tabindex="0"`) on the first list item in a drawer. Otherwise,  `MDCDrawer` will raise an error.

## ListText
### Props
| Name | Description
| - | -
| secondary | (boolean) indicates a secondary (not primary) text.

## ListDivider
### Props
| Name | Description
| - | -
| inset | increases the leading margin of the divider so that it does not intersect the avatar column.
| padded | leaves gaps on each side of divider to match padding of `list-item__meta`.

# Examples
- Simple:
```html
<List>
  <ListItem tabindex="0">Item one</ListItem>
  <ListItem>Item two</ListItem>
  <ListItem>Item three</ListItem>
</List>
```
- Two lines:
```html
<List twoLine>
  <ListItem tabindex="0">
    <ListText>Item one</ListText>
    <ListText secondary>A description</ListText>
  </ListItem>
  <ListItem>
    <ListText>Item two</ListText>
    <ListText secondary>Some extra text</ListText>    
  </ListItem>
  <ListItem>
    <ListText>Item three</ListText>
    <ListText secondary>Read more...</ListText>    
  </ListItem>
</List>
```
