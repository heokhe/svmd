<script>
import '@material/drawer/mdc-drawer.scss';
import { wrap } from './actions';
import { createClassname } from './helpers';
import { MDCDrawer } from '@material/drawer';
export let dismissible = false,
  modal = false,
  open = false;
const mdc = wrap(MDCDrawer, {
  initialize(_, drawer) {
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
$: className = createClassname('drawer', { modal, dismissible })
</script>

<aside use:mdc={open} class={className}>
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