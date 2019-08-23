<script>
import { ripple } from './actions';
import { createClassname, omit } from './helpers';
import Icon from './Icon.svelte';
export let icon = '',
  extended = false,
  exited = false,
  fixed = false,
  iconTrailing = false,
  href = '',
  mini = false;
$: props = omit($$props, 'icon', 'extended', 'fixed', 'iconTrailing', 'href', 'mini', 'class');
$: className = createClassname('fab', { extended, mini, exited, fixed })
</script>

{#if href === undefined}
  <button {...props} use:ripple class={className} on:click>
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
{:else}
  <a {...props} {href} use:ripple class={className} on:click>
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
  </a>
{/if}
