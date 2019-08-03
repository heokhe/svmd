<script>
import { Button, TopAppBar, Drawer, Fab, TabBar, Tab } from '../src';
let drawerOpen = false, activeTab = 2;
const tabs = [{
  icon: 'favorite',
  text: 'favorites'
}, { icon: 'gallery' }, { icon: 'settings' }]
</script>

<Drawer open dismissible>
  <span>hi</span>
</Drawer>
<div class="mdc-drawer-app-content">
  <TopAppBar title='SVMD Playground' on:nav-icon-click={() => drawerOpen = !drawerOpen} fixed prominent />
  <main class="main-content mdc-top-app-bar--prominent-fixed-adjust">
    <Button>regular button</Button>
    <Button outlined>outlined</Button>
    <Button raised>raised</Button>
    <Fab icon='edit' fixed extended>toggle rtl</Fab>
    <br>
    <br>
    <TabBar bind:active={activeTab} stacked>
      {#each tabs as { icon, text }}
        <Tab {icon}>{text || icon}</Tab>
      {/each}
    </TabBar>
  </main>
</div>