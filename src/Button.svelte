<script>
import '@material/button/mdc-button.scss';
import { rippleAction as ripple } from './actions';
import { omit } from './helpers';

export let dense = false,
  raised = false,
  outlined = false,
  unelevated = false;
$: props = omit($$props, 'dense', 'raised', 'outlined', 'unelevated');
</script>

<button {...props} use:ripple
  class="mdc-button"
  class:mdc-button--dense={dense}
  class:mdc-button--outlined={outlined}
  class:mdc-button--unelevated={unelevated}
  class:mdc-button--raised={raised}
  on:click on:keydown on:keypress on:keyup on:mouseover>
  <span class="mdc-button__label">
    <slot></slot>
  </span>
</button>