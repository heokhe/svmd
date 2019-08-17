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
<TopAppBar {title} on:nav-icon-click={toggleDrawer}>
  <IconButton on:click={() => title = 'SVMD Playground'}>
    <Icon>refresh</Icon>
  </IconButton>
  <IconButton href="https://github.com/hkh12/svmd" target="_blank">
    <Icon>code</Icon>
  </IconButton>
</TopAppBar>
<div class="mdc-top-app-bar--fixed-adjust">
  <Drawer bind:open={drawerOpen} dismissible title="Drawer" subtitle="Select an item">
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
    <Grid>
      <Cell span="4">
        <Button>regular button</Button>
        <Button outlined>outlined</Button>
        <Button raised>
          <Icon>favorite</Icon>
          raised
        </Button>
        <Button unelevated>unelevated</Button>
      </Cell>
      <Cell span="2">
        <Switch bind:checked />
      </Cell>
      <Cell span="6">
        <Slider bind:value={slider} disabled={!activeTab} displayMarkers step=1 />
        Value: {slider.toString().padStart(3, '0')}
      </Cell>
      <Cell span="8">
        <TabBar bind:active={activeTab} stacked>
          {#each tabs as { icon, text }}
            <Tab {icon}>{text || icon}</Tab>
          {/each}
        </TabBar>
      </Cell>
      <Cell span="4">
        <Input bind:value={title} placeholder="Playground" /> 
      </Cell>
    </Grid>
    <Fab icon='edit' fixed extended>toggle rtl</Fab>
  </div>
</div>
