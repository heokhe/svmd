<script>
  import { ripple } from './actions';
  import { omit } from './helpers';

  export let href = '';

  $: props = omit($$props, 'class', 'href');
</script>

{#if href}
  <a {...props} {href} class="mdc-icon-button"  on:click>
    <slot class="mdc-icon-button__icon"></slot>
  </a>
{:else}
  <button {...props} class="mdc-icon-button"  on:click>
    <slot class="mdc-icon-button__icon"></slot>
  </button>
{/if}