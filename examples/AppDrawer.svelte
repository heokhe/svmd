<script>
  import {
    Drawer, List, ListGroup, ListDivider, ListItem, Icon, ListText,
    ListItemContent, ListItemMeta, ListSubheader, ListItemGraphic
  } from '../src/components';
  export let open;
</script>

<Drawer bind:open modal>
  <ListGroup>
    <ListSubheader>One line</ListSubheader>
    <List>
      <ListItem tabindex="0">
        <ListItemGraphic><Icon>person</Icon></ListItemGraphic>
        <ListItemContent>Hosein</ListItemContent>
        <ListItemMeta>Admin</ListItemMeta>
      </ListItem>
      <ListItem>
        <ListItemGraphic><Icon>dns</Icon></ListItemGraphic>
        <ListItemContent>Madeline</ListItemContent>
        <ListItemMeta>Gohkhor</ListItemMeta>
      </ListItem>
    </List>
  </ListGroup>
  <ListDivider />
  <ListGroup>
    <ListSubheader>Two lines</ListSubheader>
    <List twoLine>
      <ListItem href="https://github.com/hkh12/svmd" target="_blank">
        <ListItemGraphic>
          <Icon>code</Icon>
        </ListItemGraphic>
        <ListItemContent>
          <ListText>Source code</ListText>
          <ListText secondary>Available on GitHub</ListText>
        </ListItemContent>
      </ListItem>
    </List>
  </ListGroup>
</Drawer>
