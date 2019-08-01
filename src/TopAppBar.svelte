<script>
import '@material/top-app-bar/mdc-top-app-bar.scss';
import IconButton from './IconButton.svelte';
import Icon from './Icon.svelte';
import { MDCTopAppBar } from '@material/top-app-bar';
import { component } from './actions';
import { createEventDispatcher } from 'svelte';

export let fixed = false,
  noNavIcon = false,
  dense = false,
  prominent = false,
  short = false,
  alwaysClosed = false,
  title = '';

const action = component(MDCTopAppBar)
const dispatch = createEventDispatcher()
</script>

<header use:action
  class="mdc-top-app-bar"
  class:mdc-top-app-bar--fixed={fixed}
  class:mdc-top-app-bar--dense={dense}
  class:mdc-top-app-bar--prominent={prominent}
  class:mdc-top-app-bar--short={short}
  class:mdc-top-app-bar--short-collapsed={alwaysClosed}>
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      {#if !noNavIcon}
        <IconButton class="mdc-top-app-bar__navigation-icon" disabled on:click={() => dispatch('nav-icon-click')}>
          <Icon>menu</Icon>
        </IconButton>
      {/if}
      <span class="mdc-top-app-bar__title">{title}</span>
    </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
      <slot></slot>
    </section>
  </div>
</header>