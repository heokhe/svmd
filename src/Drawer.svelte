<script>
import '@material/drawer/mdc-drawer.scss';
import { onMount, onDestroy } from 'svelte';
import { createComponentAction } from './actions';
import { MDCDrawer } from '@material/drawer';

export let dismissible = false,
  modal = false,
  open = false;

const action = createComponentAction(MDCDrawer, {
  initialize(_, drawer) {
    console.log(drawer)
    drawer.wrapFocus = true
    if (!drawer.focusTrap_) {
      drawer.focusTrap_ = drawer.focusTrapFactory_()
    }
    drawer.open = !!open;
  },
  update(_, drawer, isOpen) {
    if (isOpen !== drawer.open) drawer.open = isOpen
  }
})
</script>

<aside use:action={open}
  class="mdc-drawer"
  class:mdc-drawer--dismissible={dismissible}
  class:mdc-drawer--modal={modal}>
  <div class="mdc-drawer__header">
    <slot name="header"></slot>
  </div>
  <div class="mdc-drawer__content">
    <slot></slot>
  </div>
</aside>
{#if modal}
  <div class="mdc-drawer-scrim"></div>
{/if}

<style>
:global(.mdc-drawer__header:empty) {
  display: none
}
</style>