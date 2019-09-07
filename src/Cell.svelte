<script>
  import { createClassname } from './helpers';
  import { getContext } from 'svelte';

  export let span = void 0,
    order = void 0,
    phone = void 0,
    tablet = void 0,
    desktop = void 0;

  const align = getContext('grid-data');

  $: className = createClassname('layout-grid__cell', {
    align: $align,
    order, span,
    [`span-${phone}-phone`]: !!phone,
    [`span-${tablet}-tablet`]: !!tablet,
    [`span-${desktop}-desktop`]: !!desktop
  })
</script>

<div class={className}>
  <slot></slot>
</div>
