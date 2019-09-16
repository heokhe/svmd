<script>
  import { getContext, onMount } from 'svelte';
  import { ripple } from '../actions';
  import { omit } from '../helpers';

  export let href = undefined;

  const listRole = getContext('svmd:list:role');
  $: role = ({
    group: 'checkbox',
    radiogroup: 'radio'
  })[$listRole];

  $: props = omit($$props, 'href', 'class');
  $: c = `mdc-list-item mdc-ripple-upgraded ${$$props.class}`;
</script>

{#if href !== undefined}
  <a {...props} {role} {href} class={c} use:ripple>
    <slot></slot>
  </a>
{:else}
  <li {...props} {role} class={c} use:ripple>
    <slot></slot>
  </li>
{/if}
