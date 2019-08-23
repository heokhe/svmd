<script>
  import { wrap } from './actions';
  import { cls, subcls } from './helpers';
  import { MDCTextField } from '@material/textfield';

  export let type = 'text',
    value = '',
    fullwidth = false,
    outlined = false,
    label = '',
    leadingIcon = '',
    trailingIcon = '',
    placeholder = '';

  const mdc = wrap(MDCTextField, {
    initialize(mdc) {
      const input = mdc.root_;
      input.addEventListener('input', ({ target }) => {
        value = type === 'number' ? target.valueAsNumber : target.value;
      })
    }
  });

  $: c = cls('text-field', {
    fullwidth,
    outlined,
    noLabel: !fullwidth && !label,
    withLeadingIcon: !!leadingIcon,
    withTrailingIcon: !!trailingIcon
  });
  $: outlineC = cls`notched-outline`;
  $: floatingLabelC = cls`floating-label`;
</script>

<div class={c} use:mdc>
  {#if leadingIcon}
    <span class="material-icons {subcls(c, 'icon')}">
      {leadingIcon}
    </span>
  {/if}
  <input {type} {value} {placeholder} class={subcls(c, 'input')} aria-label={label}
    on:input on:focus on:blur on:change on:keydown on:keyup on:keypress>
  {#if trailingIcon}
    <span class="material-icons {subcls(c, 'icon')}">
      {trailingIcon}
    </span>
  {/if}
  {#if outlined}
    <div class={outlineC}>
      <div class={subcls(outlineC, 'leading')}></div>
      <div class={subcls(outlineC, 'notch')}>
        <label class={floatingLabelC}>{label}</label>
      </div>
      <div class={subcls(outlineC, 'trailing')}></div>
    </div>
  {/if}
  {#if !fullwidth && !outlined && label}
    <label class={floatingLabelC}>{label}</label>
  {/if}
  {#if !outlined}
    <div class="mdc-line-ripple"></div>
  {/if}
</div>
