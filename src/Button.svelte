<script>
import Icon from './Icon.svelte';
import { ripple } from './actions';
import { omit, cls, subcls } from './helpers';

export let dense = false,
  raised = false,
  outlined = false,
  unelevated = false,
  icon = '',
  href = '';

$: props = omit($$props, 'dense', 'raised', 'outlined', 'unelevated', 'href');
$: c = cls('button', { dense, outlined, unelevated, raised })
</script>

{#if href}
  <a {href} {...props}  class={c} on:click on:keydown on:keypress on:keyup on:mouseover>
    {#if icon}
      <Icon class={subcls(c, 'icon')}>{icon}</Icon>
    {/if}
    <span class={subcls(c, 'label')}>
      <slot></slot>
    </span>
  </a>
{:else}
  <button {...props}  class={c} on:click on:keydown on:keypress on:keyup on:mouseover>
    {#if icon}
      <Icon class={subcls(c, 'icon')}>{icon}</Icon>
    {/if}
    <span class={subcls(c, 'label')}>
      <slot></slot>
    </span>
  </button>
{/if}
