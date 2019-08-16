<script>
  import { wrap } from './actions';
  import { createClassname } from './helpers';
  import { MDCTextField } from '@material/textfield';

  export let type = 'text',
    value = '',
    fullwidth = false,
    // outlined = false,
    label = '',
    placeholder = '';

  const mdc = wrap(MDCTextField, {
    initialize({ root_: input }) {
      input.addEventListener('input', ({ target }) => {
        value = target.value;
      })
    }
  });

  $: className = createClassname('text-field', {
    fullwidth,
    // outlined,
    noLabel: !fullwidth && !label
  })
</script>

<div class={className} use:mdc>
  <input {type} {value} {placeholder}
    class="mdc-text-field__input"
    aria-label={label}
    on:input on:focus on:blur on:change
    on:keydown on:keyup on:keypress>
  <!-- {#if outlined}
    <div class="mdc-notched-outline">
      <div class="mdc-notched-outline__leading"></div>
      <div class="mdc-notched-outline__trailing"></div>
    </div>
  {/if} -->
  {#if label}
    <label class="mdc-floating-label">{label}</label>
  {/if}
  <!-- {#if !outlined} -->
    <div class="mdc-line-ripple"></div>
  <!-- {/if} -->
 </div>
