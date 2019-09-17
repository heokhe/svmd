# Lists
- [MDC Docs](https://material.io/develop/web/components/lists/)
- [MDC Demo](https://material-components.github.io/material-components-web-catalog/#/component/list)

# Components
Components that don't have any props are not included below.
## List
### Props
| Name | Description
| - | -
| dense | reduces the height of items.
| twoLine | use it to place two lines in at item, instead of one.
| singleSelection | (boolean) activates single selection mode.
| selectedIndex | index of selected item in singleSelection mode. must be used as `bind:selectedIndex`.
| checkbox | allows placing [checkboxes](./checkbox.md) in the items.
| radio | allows placing [radio buttons](./radio.md) in the items.

## ListItem
> **Note**: Declare a tabindex attribute (most likely `tabindex="0"`) on the first list item in a drawer. Otherwise,  `MDCDrawer` will raise an error.

## ListItemMeta
### Props
| Name | Description
| - | -
| icon | pass `true` to render an icon.

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

# Examples
## Basic example
```svelte
<List>
  <ListItem>
    <ListItemContent>Item one</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>Item two</ListItemContent>
  </ListItem>
</List>
```
## Using `twoLine` prop
```svelte
<List twoLine>
  <ListItem>
    <ListItemContent>
      <ListItemText>Item one</ListItemText>
      <ListItemText secondary>A description</ListItemText>
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>
      <ListItemText>Item two</ListItemText>
      <ListItemText secondary>A short caption</ListItemText>
    </ListItemContent>
  </ListItem>
</List>
```
## Meta & Graphics
```svelte
<List>
  <ListItem>
    <ListItemGraphic>person</ListItemGraphic>
    <ListItemContent>John Doe</ListItemContent>
    <ListItemMeta>User</ListItemMeta>
  </ListItem>
  <ListItem>
    <ListItemGraphic>account_box</ListItemGraphic>
    <ListItemContent>Carl Johnson</ListItemContent>
    <ListItemMeta>Admin</ListItemMeta>
  </ListItem>
  <ListItem>
    <ListItemGraphic>dns</ListItemGraphic>
    <ListItemContent>ManagerBot</ListItemContent>
    <ListItemMeta>Bot</ListItemMeta>
  </ListItem>
</List>
```
Note that you can put anything into ListItemMeta, such as icon buttons, regular text, checkboxes, radio buttons, and also icons (you must pass `icon={true}` to ListItemMeta).
## Grouped
```svelte
<ListGroup>
  <ListSubheader>Group 1</ListSubheader>
  <!-- A <List> -->
</ListGroup>
<ListGroup>
  <ListSubheader>Group 2</ListSubheader>
  <!-- Another <List> -->
</ListGroup>
```
