<script>
  import { omit } from './helpers';
  $: props = omit($$props, 'class');
</script>

<i class="material-icons {$$props.class}" {...props}>
  <slot></slot>
</i>
