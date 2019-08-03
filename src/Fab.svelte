<script>
import '@material/fab/mdc-fab.scss';
import { ripple } from './actions';
import { createClassname } from './helpers';
import Icon from './Icon.svelte';
export let icon = '',
  extended = false,
  exited = false,
  fixed = false,
  iconTrailing = false,
  mini = false;
$: className = createClassname('fab', { extended, mini, exited, fixed })
</script>

<button use:ripple class={className} on:click>
  {#if icon && !iconTrailing}
    <div class="mdc-fab__icon"><Icon>{icon}</Icon></div>
  {/if}
  {#if extended}
    <span class="mdc-fab__label">
      <slot></slot>
    </span>
  {/if}
  {#if icon && iconTrailing}
    <div class="mdc-fab__icon"><Icon>{icon}</Icon></div>
  {/if}
</button>

<style>
:global(.mdc-fab.mdc-fab--fixed) {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 5;
}
@media only screen and (min-width: 1024px) {
  :global(.mdc-fab.mdc-fab--fixed) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>