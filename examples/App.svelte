<script>
import {
  Button, TopAppBar, Drawer, Fab, TabBar, Tab, Slider, Radio,
  Input, IconButton, Icon, Switch, List, ListItem, FormField,
  ListText, ListDivider, Grid, Cell, H6, Snackbar, Checkbox
} from '../src/components';

let drawerOpen = false,
  activeTab = 0,
  slider = 35,
  title = 'SVMD Playground',
  checked = false,
  snackbar = false,
  color = '';

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
    <ListItem icon="book">
      Documentation
    </ListItem>
  </List>
  <ListDivider />
  <List twoLine>
    <ListItem icon="web">
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
      <Cell span="6">
        <H6>Buttons</H6>
        <Button>regular button</Button>
        <Button outlined>outlined</Button>
        <Button raised icon="favorite">raised with icon</Button>
        <Button unelevated>unelevated</Button>
      </Cell>

      <Cell span="6">
        <H6>Tabs</H6>
        <TabBar bind:active={activeTab}>
          <Tab icon="settings">settings</Tab>
          <Tab icon="photo">gallery</Tab>
          <Tab icon="person">contacts</Tab>
        </TabBar>
      </Cell>

      <Cell span="6">
        <H6>Sliders</H6>
        <Slider bind:value={slider} step={1} />
        <Slider bind:value={slider} step={1} discrete />
        <Slider bind:value={slider} step={10} discrete displayMarkers />
        Value: {slider}/100
      </Cell>

      <Cell span="6">
        <H6>Text fields</H6>
        <Grid noPadding>
          <Cell desktop="6" phone="4">
            <Input trailingIcon="close" outlined bind:value={title} placeholder="Playground" label="Page Title" />
          </Cell>
          <Cell desktop="3" phone="2">
            <Input outlined type="number" inputmode="numeric" min="0" max="100" step="1" bind:value={slider} label="Slider value" />   
          </Cell>
          <Cell desktop="3" phone="2">
            <Input type="number" inputmode="numeric" min="0" max="100" step="1" bind:value={slider} label="Slider value" />  
          </Cell>
        </Grid>
      </Cell>

      <Cell span="2">
        <H6>Snackbars</H6>
        <Button on:click={() => snackbar = true} raised>open it!</Button>
        <Snackbar bind:active={snackbar}>
          This is an important message.
        </Snackbar>
      </Cell>

      <Cell span="2">
        <H6>Radio Buttons</H6>
        {#each ['red', 'green', 'blue'] as value}
          <FormField>
            <Radio id="radio-{value}" {value} bind:group={color} />
            <label for="radio-{value}" style="text-transform: capitalize">{value}</label>
          </FormField>
          <br>
        {/each}
        <span>Selected color: {color}</span>
      </Cell>

      <Cell span="2">
        <H6>Switches</H6>
        <Switch bind:checked />
      </Cell>

      <Cell span="2">
        <H6>Checkboxes</H6>
        <FormField>
          <Checkbox id="mycheckbox" bind:checked />
          <label for="mycheckbox">{checked ? 'On' : 'Off'} ({checked})</label>
        </FormField>
      </Cell>
    </Grid>
    
    <Fab icon="code" fixed extended href="https://github.com/hkh12/svmd" target="_blank">open on github</Fab>
  </div>
</div>
