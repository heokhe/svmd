<script>
  import AppDrawer from './AppDrawer.svelte';
  import {
    Button, TopAppBar, Fab, TabBar, Tab, Slider,
    Input, IconButton, Icon, Switch, FormField,
    Grid, Cell, H6, Snackbar, Checkbox, Radio
  } from '../src';

  let drawerOpen = false,
    activeTab = 0,
    slider = 35,
    checked = false,
    snackbar = false,
    color = 'blue';

  const toggleDrawer = () => drawerOpen = !drawerOpen;
  const reload = () => window.location.reload();
</script>

<AppDrawer bind:open={drawerOpen} />
<TopAppBar title="SVMD Playground" on:nav-icon-click={toggleDrawer} fixed>
  <IconButton on:click={reload}><Icon>refresh</Icon></IconButton>
</TopAppBar>
<div class="mdc-top-app-bar--fixed-adjust">
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
          <Input trailingIcon="close" outlined placeholder="John Doe" label="Your Name" />
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
      <Button on:click={() => snackbar = !snackbar} raised>open it!</Button>
      <Snackbar bind:active={snackbar} duration={4}>
        This is an important message.
      </Snackbar>
    </Cell>

    <Cell span="2">
      <H6 style="color: {color}">Radio Buttons</H6>
      {#each ['red', 'green', 'blue'] as value}
        <FormField>
          <Radio id="radio-{value}" {value} bind:group={color} />
          <label for="radio-{value}" style="text-transform: capitalize">{value}</label>
        </FormField>
        <br>
      {/each}
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
  
  <Fab icon="code" fixed extended href="https://github.com/hkh12/svmd" target="_blank">
    open on github
  </Fab>
</div>
