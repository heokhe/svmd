<script>
import { ripple } from './actions';
</script>

<button class="mdc-icon-button" use:ripple={true} on:click>
  <slot class="mdc-icon-button__icon"></slot>
</button>