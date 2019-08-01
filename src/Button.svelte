<script>
import '@material/button/mdc-button.scss';
import { ripple } from './actions';
import { omit, createClassname } from './helpers';

export let dense = false,
  raised = false,
  outlined = false,
  unelevated = false;
$: props = omit($$props, 'dense', 'raised', 'outlined', 'unelevated');
$: className = createClassname('mdc-button', { dense, outlined, unelevated, raised })
</script>

<button {...props} use:ripple class={className} on:click on:keydown on:keypress on:keyup on:mouseover>
  <span class="mdc-button__label">
    <slot></slot>
  </span>
</button>