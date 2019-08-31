<script>
import {
  Button, TopAppBar, Drawer, Fab, TabBar, Tab, Slider,
  Input, IconButton, Icon, Switch, List, ListItem,
  ListText, ListDivider, Grid, Cell, H6, Snackbar, Checkbox
} from '../src';

let drawerOpen = false,
  activeTab = 0,
  slider = 35,
  title = 'SVMD Playground',
  checked = false,
  snackbar = false;

const toggleDrawer = () => drawerOpen = !drawerOpen;
const reload = () => window.location.reload();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Drawer bind:open={drawerOpen} modal withHeader>
  <span slot="title">Drawer</span>
  <span slot="subtitle">Select an item</span>
  <List>
    <ListItem tabindex="0">
      Installation
    </ListItem>
    <ListItem>
      Documentation
    </ListItem>
  </List>
  <ListDivider />
  <List twoLine>
    <ListItem>
      <ListText>Website</ListText>
      <ListText secondary>See it!</ListText>
    </ListItem>
  </List>
</Drawer>

<TopAppBar {title} on:nav-icon-click={toggleDrawer} fixed>
  <IconButton on:click={reload}>
    <Icon>refresh</Icon>
  </IconButton>
</TopAppBar>

<div class="mdc-top-app-bar--fixed-adjust">
  <div class="mdc-drawer-app-content">
    <Grid>
      <Cell span="12">
        <H6>Buttons</H6>
        <Button>regular button</Button>
        <Button outlined>outlined</Button>
        <Button raised icon="favorite">raised with icon</Button>
        <Button unelevated>unelevated</Button>
      </Cell>

      <Cell span="2" desktop="3">
        <H6>Switches</H6>
        <Switch bind:checked />
      </Cell>

      <Cell span="2" desktop="5">
        <H6>Sliders</H6>
        <Slider bind:value={slider} step={1} />
        Value: {slider}/100
      </Cell>

      <Cell phone="4">
        <H6>Text fields</H6>
        <Input trailingIcon="close" outlined bind:value={title} placeholder="Playground" label="Page Title" /> 
        <br><br>
        <Input outlined type="number" inputmode="numeric" bind:value={slider} label="Slider value" /> 
      </Cell>

      <Cell span="5">
        <H6>Tabs</H6>
        <TabBar bind:active={activeTab} stacked spanIndicatorToContent>
          <Tab icon="settings">settings</Tab>
          <Tab icon="photo">gallery</Tab>
          <Tab icon="person">contacts</Tab>
        </TabBar>
      </Cell>

      <Cell span="2">
        <H6>Snackbars</H6>
        <Button on:click={() => snackbar = true} raised>open snackbar</Button>
        <Snackbar bind:active={snackbar} leading>
          This is an important message.
        </Snackbar>
      </Cell>

      <Cell span="2">
        <H6>Checkboxes</H6>
        <Checkbox bind:checked={snackbar} />
      </Cell>
    </Grid>
    
    <Fab icon="code" fixed extended href="https://github.com/hkh12/svmd" target="_blank">open on github</Fab>
  </div>
</div>
