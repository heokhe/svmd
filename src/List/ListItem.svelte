<script>
  import { getContext } from 'svelte';
  import { ripple } from '../actions';
  import { omit } from '../helpers';

  export let href = undefined;

  const parentListRole = getContext('svmd:list:role');

  $: role = ({
    group: 'checkbox',
    radiogroup: 'radio',
    listbox: 'option',
    list: 'listitem'
  })[$parentListRole] || '';
  $: props = omit($$props, 'href', 'class');
  $: c = `mdc-list-item mdc-ripple-upgraded ${$$props.class}`;
</script>

{#if href !== undefined}
  <a {...props} {role} {href} class={c} >
    <slot></slot>
  </a>
{:else}
  <li {...props} {role} class={c} >
    <slot></slot>
  </li>
{/if}
