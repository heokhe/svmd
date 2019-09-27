<script>
  import {
    Drawer, List, ListGroup, ListDivider, ListItem, Icon, ListItemText,
    ListItemContent, ListItemMeta, ListSubheader, ListItemGraphic
  } from '../src';
  export let open;
</script>

<Drawer bind:open modal>
  <ListGroup>
    <ListSubheader>Users</ListSubheader>
    <List>
      <ListItem tabindex="0">
        <ListItemGraphic><Icon>person</Icon></ListItemGraphic>
        <ListItemContent>John Doe</ListItemContent>
        <ListItemMeta>Admin</ListItemMeta>
      </ListItem>
      <ListItem>
        <ListItemGraphic><Icon>add</Icon></ListItemGraphic>
        <ListItemContent>Add a user</ListItemContent>
      </ListItem>
    </List>
  </ListGroup>
  <ListDivider />
  <ListGroup>
    <ListSubheader>Links</ListSubheader>
    <List twoLine>
      <ListItem href="https://github.com/hkh12/svmd" target="_blank">
        <ListItemGraphic>
          <Icon>code</Icon>
        </ListItemGraphic>
        <ListItemContent>
          <ListItemText>Source code</ListItemText>
          <ListItemText secondary>Available on GitHub</ListItemText>
        </ListItemContent>
      </ListItem>
      <ListItem href="https://svmd.surge.sh" target="_blank">
        <ListItemGraphic>
          <Icon>web</Icon>
        </ListItemGraphic>
        <ListItemContent>
          <ListItemText>Website</ListItemText>
          <ListItemText secondary>Documentation, ...</ListItemText>
        </ListItemContent>
      </ListItem>
    </List>
  </ListGroup>
</Drawer>
