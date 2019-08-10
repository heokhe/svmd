<script>
  import { createClassname } from './helpers';

  export let fixedWidth = false,
    align = '';

  $: className = createClassname('layout-grid', {
    fixedColumnWidth: fixedWidth,
    align
  })
</script>

<div class={className}>
  <div class="mdc-layout-grid__inner">
    <slot></slot>
  </div>
</div>