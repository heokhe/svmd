<script>
import {
  Button, TopAppBar, Drawer, Fab, TabBar, Tab, Slider, Input, IconButton, Icon, Switch,
  List, ListItem, ListText, ListDivider, Grid, Cell
} from '../src';
let drawerOpen = true,
  activeTab = 2,
  slider = 35,
  title = 'SVMD Playground',
  checked = false;
const tabs = [{
  icon: 'favorite', text: 'favorites'
}, {
  icon: 'photo', text: 'gallery'
}, {
  icon: 'settings'
}]
const toggleDrawer = () => drawerOpen = !drawerOpen;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<Drawer bind:open={drawerOpen} dismissible title="Drawer" subtitle="Select an item">
  <!-- <Input bind:value={title} label="Page Title" placeholder="Playground" /> -->
  <List twoLine>
    <ListItem>
      <ListText>Installation</ListText>
      <ListText secondary>Using only 10 keystrokes</ListText>
    </ListItem>
    <ListItem>
      <ListText>Documentation</ListText>
      <ListText secondary>Coming soon...</ListText>
    </ListItem>
  </List>
</Drawer>
<div class="mdc-drawer-app-content">
  <TopAppBar title={title} on:nav-icon-click={toggleDrawer}>
    <IconButton on:click={() => title = 'SVMD Playground'}>
      <Icon>refresh</Icon>
    </IconButton>
  </TopAppBar>
  <main class="main-content mdc-top-app-bar--fixed-adjust">
    <Grid>
      <Cell span="4">
        <Button>regular button</Button>
        <Button outlined>outlined</Button>
        <Button raised>raised</Button>
        <Button unelevated>unelevated</Button>
      </Cell>
      <Cell span="2">
        <Switch bind:checked />
      </Cell>
      <Cell span="6">
        <Slider bind:value={slider} disabled={!activeTab} displayMarkers step=1 />
        Value: {slider.toString().padStart(3, '0')}
      </Cell>
      <Cell span="12">
        <TabBar bind:active={activeTab} narrow>
          {#each tabs as { icon, text }}
            <Tab {icon}>{text || icon}</Tab>
          {/each}
        </TabBar>
      </Cell>
    </Grid>
    <Fab icon='edit' fixed extended>toggle rtl</Fab>
  </main>
</div>