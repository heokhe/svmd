<script>
import { wrap } from './actions';
import { createClassname } from './helpers';
import { MDCDrawer } from '@material/drawer';
export let dismissible = false,
  modal = false,
  open = false,
  title = '',
  subtitle = '';
const mdc = wrap(MDCDrawer, {
  initialize(drawer) {
    // fixes scrim_ === null
    setTimeout(() => {
      drawer.wrapFocus = true
      if (!drawer.focusTrap_) drawer.focusTrap_ = drawer.focusTrapFactory_();
      if (!drawer.scrim_) drawer.initialSyncWithDOM();
      drawer.open = !!open;
      drawer.listen('MDCDrawer:closed', () => {
        open = false
      });
    }, 0);
  },
  update(drawer, isOpen) {
    if (isOpen !== drawer.open) drawer.open = isOpen
  }
})
$: className = createClassname('drawer', { modal, dismissible })
</script>

<aside use:mdc={open} class={className}>
  {#if title}
    <div class="mdc-drawer__header">
      <div class="mdc-drawer__title">{title}</div>
      <div class="mdc-drawer__subtitle">{subtitle}</div>
    </div>
  {/if}
  <div class="mdc-drawer__content">
    <slot></slot>
  </div>
</aside>
{#if modal}
  <div class="mdc-drawer-scrim"></div>
{/if}