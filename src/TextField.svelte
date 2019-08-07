<script>
  import '@material/textfield/mdc-text-field.scss';
  import { wrap } from './actions';
  import { createClassname } from './helpers';
  import { MDCTextField } from '@material/textfield';

  export let type = 'text',
    value = '',
    fullwidth = false,
    // outlined = false,
    label = '',
    placeholder = '';

  const mdc = wrap(MDCTextField);

  function handleInput(event) {
    value = event.target.value
  }

  $: className = createClassname('text-field', {
    fullwidth,
    // outlined,
    noLabel: !label && !placeholder
  })
</script>

<div class={className} use:mdc>
  <input {type} {value} on:input={handleInput} class="mdc-text-field__input" aria-label={label} {placeholder}>
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
