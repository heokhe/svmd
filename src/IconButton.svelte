<script>
import '@material/icon-button/mdc-icon-button.scss';
import { ripple } from './actions';
</script>

<button class="mdc-icon-button" use:ripple={{ unbounded: true }} on:click>
  <slot class="mdc-icon-button__icon"></slot>
</button>