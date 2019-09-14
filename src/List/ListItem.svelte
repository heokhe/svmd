<script>
  import { ripple } from '../actions';
  import { omit } from '../helpers';

  export let href = undefined;

  $: props = omit($$props, 'href', 'class');
</script>

{#if href !== undefined}
  <a {...props} {href} class="mdc-list-item {$$props.class}" use:ripple>
    <slot></slot>
  </a>
{:else}
  <li {...props} class="mdc-list-item {$$props.class}" use:ripple>
    <slot></slot>
  </li>
{/if}
