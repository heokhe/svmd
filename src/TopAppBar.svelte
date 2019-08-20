<script>
import IconButton from './IconButton.svelte';
import Icon from './Icon.svelte';
import { MDCTopAppBar } from '@material/top-app-bar';
import { wrap } from './actions';
import { cls, subcls } from './helpers';
import { createEventDispatcher } from 'svelte';
export let fixed = false,
  noNavIcon = false,
  dense = false,
  prominent = false,
  short = false,
  alwaysClosed = false,
  title = '';
const mdc = wrap(MDCTopAppBar),
  dispatch = createEventDispatcher(),
  onNavIconClick = e => dispatch('nav-icon-click', e);
$: c = cls('top-app-bar', {
  fixed, dense, prominent, short,
  'short-collapsed': alwaysClosed
})
$: firstSectionC = subcls(c, 'section', { align: 'start' })
$: lastSectionC = subcls(c, 'section', { align: 'end' })
</script>

<header use:mdc class={c}>
  <div class={subcls(c, 'row')}>
    <section class={firstSectionC}>
      {#if !noNavIcon}
        <div class={subcls(c, 'navigation-icon')}>
          <IconButton on:click={onNavIconClick}>
            <Icon>menu</Icon>
          </IconButton>
        </div>
      {/if}
      <span class={subcls(c, 'title')}>{title}</span>
    </section>
    <section class={lastSectionC} role="toolbar">
      <slot></slot>
    </section>
  </div>
  <div class={subcls(c, 'row', { tabs: true })}>
    <slot name="tabs"></slot> 
  </div>
</header>
