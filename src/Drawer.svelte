<script>
import { wrap } from './actions';
import { createClassname } from './helpers';
// import { MDCDrawer } from '@material/drawer';
export let dismissible = false,
  modal = false,
  open = false,
  mode = 'modal',
  withHeader = false;
// const mdc = wrap(MDCDrawer, {
//   initialize(drawer) {
//     // fixes scrim_ === null
//     setTimeout(() => {
//       if (!drawer.focusTrap_) drawer.focusTrap_ = drawer.focusTrapFactory_();
//       if (!drawer.scrim_) drawer.initialSyncWithDOM();
//       drawer.wrapFocus = true
//       drawer.listen('MDCDrawer:closed', () => open = false);
//     }, 0);
//   },
//   initAndUpdate(drawer, open) {
//     if (!!open !== drawer.open) drawer.open = !!open
//   }
// })
$: className = createClassname('drawer', { modal, dismissible })
</script>

<aside  class={className}>
  {#if withHeader}
    <div class="mdc-drawer__header">
      <div class="mdc-drawer__title">
        <slot name="title"></slot>
      </div>
      <div class="mdc-drawer__subtitle">
        <slot name="subtitle"></slot>
      </div>
    </div>
  {/if}
  <div class="mdc-drawer__content">
    <slot></slot>
  </div>
</aside>
{#if modal}
  <div class="mdc-drawer-scrim"></div>
{/if}
