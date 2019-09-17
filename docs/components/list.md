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

## ListItemText
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

## ListGroup
No props are provided.

## ListSubheader
No props are provided.

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
    <ListItemText>Item one</ListItemText>
    <ListItemText secondary>A description</ListItemText>
  </ListItem>
  <ListItem>
    <ListItemText>Item two</ListItemText>
    <ListItemText secondary>Some extra text</ListItemText>    
  </ListItem>
  <ListItem>
    <ListItemText>Item three</ListItemText>
    <ListItemText secondary>Read more...</ListItemText>    
  </ListItem>
</List>
```
- Grouped:
```svelte
<ListGroup>
  <ListSubheader>Group 1</ListSubheader>
  <List>
    <ListItem>Item</ListItem>
  </List>
</ListGroup>
<ListGroup>
  <ListSubheader>Group 2</ListSubheader>
  <List>
    <ListItem>Item</ListItem>
  </List>
</ListGroup>
```
