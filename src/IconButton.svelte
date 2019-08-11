<script>
  import { ripple } from './actions';
  import { omit } from './helpers';

  $: props = omit($$props, 'class');
</script>

<button {...props} class="mdc-icon-button" use:ripple={true} on:click>
  <slot class="mdc-icon-button__icon"></slot>
</button>