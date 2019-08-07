<script>
  import { createClassname } from '../helpers';
  export let padded = false, inset = false;
  $: className = createClassname('list-divider', { padded, inset })
</script>

<hr class={className}>