<script>
import IconButton from './IconButton.svelte';
import Icon from './Icon.svelte';
import { MDCTopAppBar } from '@material/top-app-bar';
import { wrap } from './actions';
import { createClassname } from './helpers';
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
$: className = createClassname('top-app-bar', {
  fixed, dense, prominent, short,
  'short-collapsed': alwaysClosed
})
</script>

<header use:mdc class={className}>
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      {#if !noNavIcon}
        <div class="mdc-top-app-bar__navigation-icon">
          <IconButton class="mdc-top-app-bar__navigation-icon" on:click={onNavIconClick}>
            <Icon>menu</Icon>
          </IconButton>
        </div>
      {/if}
      <span class="mdc-top-app-bar__title">{title}</span>
    </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
      <slot></slot>
    </section>
  </div>
  <div class="mdc-top-app-bar__row mdc-top-app-bar__row--tabs">
    <slot name="tabs"></slot> 
  </div>
</header>
