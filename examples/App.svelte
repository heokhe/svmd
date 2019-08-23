<script>
import {
  Button, TopAppBar, Drawer, Fab, TabBar, Tab, Slider,
  Input, IconButton, Icon, Switch, List, ListItem,
  ListText, ListDivider, Grid, Cell, H6
} from '../src';

let drawerOpen = false,
  activeTab = 2,
  slider = 35,
  title = 'SVMD Playground',
  checked = false;

const toggleDrawer = () => drawerOpen = !drawerOpen;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Drawer bind:open={drawerOpen} modal withHeader>
  <span slot="title">Drawer</span>
  <span slot="subtitle">Select an item</span>
  <List twoLine>
    <ListItem tabindex="0">
      <ListText>Installation</ListText>
      <ListText secondary>Using only 10 keystrokes</ListText>
    </ListItem>
    <ListItem>
      <ListText>Documentation</ListText>
      <ListText secondary>Coming soon...</ListText>
    </ListItem>
  </List>
</Drawer>

<TopAppBar {title} on:nav-icon-click={toggleDrawer} fixed>
  <IconButton on:click={() => title = 'SVMD Playground'}>
    <Icon>refresh</Icon>
  </IconButton>
</TopAppBar>

<div class="mdc-top-app-bar--fixed-adjust">
  <div class="mdc-drawer-app-content">
    <Grid>
      <Cell span="12">
        <H6>Buttons</H6>
        <Button icon="add">regular button</Button>
        <Button outlined>outlined</Button>
        <Button raised icon="favorite">raised</Button>
        <Button unelevated>unelevated</Button>
      </Cell>

      <Cell span="2" desktop="3">
        <H6>Switches</H6>
        <Switch bind:checked />
      </Cell>

      <Cell span="2" desktop="5">
        <H6>Sliders</H6>
        <Slider bind:value={slider} disabled={!activeTab} step="1" />
        Value: {slider}/100
      </Cell>

      <Cell phone="4">
        <H6>Text fields</H6>
        <Input trailingIcon="close" outlined bind:value={title} placeholder="Playground" label="Page Title" /> 
        <br><br>
        <Input outlined type="number" bind:value={slider} label="Slider value" /> 
      </Cell>

      <Cell span="12">
        <H6>Tabs</H6>
        <TabBar bind:active={activeTab} stacked narrow spanIndicatorToContent>
          <Tab icon="settings">settings</Tab>
          <Tab icon="photo">gallery</Tab>
          <Tab icon="person">contacts</Tab>
        </TabBar>
      </Cell>
    </Grid>
    
    <Fab icon="code" fixed extended href="https://github.com/hkh12/svmd" target="_blank">open on github</Fab>
  </div>
</div>
