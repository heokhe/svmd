<script>
import '@material/button/mdc-button.scss';
import { onMount, onDestroy } from 'svelte';
import { MDCRipple } from '@material/ripple';

export let dense = false,
  raised = false,
  outlined = false,
  unelevated = false;

let button, ripple;
onMount(() => {
  ripple = new MDCRipple(button);
})
onDestroy(() => {
  if (ripple) ripple.destroy()
})
</script>

<button class="mdc-button"
  bind:this={button}
  class:mdc-button--dense={dense}
  class:mdc-button--outlined={outlined}
  class:mdc-button--unelevated={unelevated}
  class:mdc-button--raised={raised}>
  <span class="mdc-button__label">
    <slot></slot>
  </span>
</button>