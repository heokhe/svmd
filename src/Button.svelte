<script>
import '@material/button/mdc-button.scss';
import { rippleAction as ripple } from './actions';

export let dense = false,
  raised = false,
  outlined = false,
  unelevated = false;
</script>

<button class="mdc-button"
  use:ripple
  class:mdc-button--dense={dense}
  class:mdc-button--outlined={outlined}
  class:mdc-button--unelevated={unelevated}
  class:mdc-button--raised={raised}>
  <span class="mdc-button__label">
    <slot></slot>
  </span>
</button>