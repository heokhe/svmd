<script>
  import { createClassname } from './helpers';

  export let position = "",
    order = 0,
    span = 0,
    phone = 0,
    tablet = 0,
    desktop = 0;

  $: className = createClassname('layout-grid__cell', {
    align: position,
    order, span,
    [`span-${span}-phone`]: !!phone,
    [`span-${span}-tablet`]: !!tablet,
    [`span-${span}-desktop`]: !!desktop
  })
</script>

<div class={className}>
  <slot></slot>
</div>