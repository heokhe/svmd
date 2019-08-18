<script>
import Icon from './Icon.svelte';
import { ripple } from './actions';
import { omit, createClassname } from './helpers';

export let dense = false,
  raised = false,
  outlined = false,
  unelevated = false,
  icon = '',
  href = '';

$: props = omit($$props, 'dense', 'raised', 'outlined', 'unelevated', 'href');
$: className = createClassname('button', { dense, outlined, unelevated, raised })
</script>

{#if href}
  <a {href} {...props} use:ripple class={className} on:click on:keydown on:keypress on:keyup on:mouseover>
    {#if icon}
      <span class="mdc-button__icon material-icons">{icon}</span>
    {/if}
    <span class="mdc-button__label">
      <slot></slot>
    </span>
  </a>
{:else}
  <button {...props} use:ripple class={className} on:click on:keydown on:keypress on:keyup on:mouseover>
    {#if icon}
      <span class="mdc-button__icon material-icons">{icon}</span>
    {/if}
    <span class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
{/if}
