<script>
  import { cls } from './helpers';
  import { writable } from 'svelte/store';
  import { setContext } from 'svelte';

  export let fixedWidth = false,
    noPadding = false,
    align = '',
    verticalAlign = 'top';

  const data = writable(verticalAlign);
  setContext('grid-data', data)

  $: className = cls('layout-grid', {
    fixedColumnWidth: fixedWidth,
    noPadding,
    align
  })
</script>

<div class={className}>
  <div class="mdc-layout-grid__inner">
    <slot></slot>
  </div>
</div>
