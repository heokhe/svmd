<script>
import { ripple } from './actions';
import { omit, createClassname } from './helpers';

export let dense = false,
  raised = false,
  outlined = false,
  unelevated = false,
  href = '';
$: props = omit($$props, 'dense', 'raised', 'outlined', 'unelevated', 'href');
$: className = createClassname('button', { dense, outlined, unelevated, raised })
</script>

{#if href}
  <a {href} {...props} use:ripple class={className} on:click on:keydown on:keypress on:keyup on:mouseover>
    <span class="mdc-button__label">
      <slot></slot>
    </span>
  </a>
{:else}
  <button {...props} use:ripple class={className} on:click on:keydown on:keypress on:keyup on:mouseover>
    <span class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
{/if}