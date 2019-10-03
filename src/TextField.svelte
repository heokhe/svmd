<script>
  import Icon from './Icon.svelte';
  import { cls, subcls, omit } from './helpers';

  export let type = 'text',
    value = '',
    fullwidth = false,
    outlined = false,
    label = '',
    leadingIcon = '',
    trailingIcon = '',
    placeholder = '';

  let focused = false, notchedOutlineLabel;

  function handleInput({ target }) {
    value = type === 'number' ? target.valueAsNumber : target.value;
  }

  $: isNotEmpty = focused || !!value;
  $: nolWidth = notchedOutlineLabel ? notchedOutlineLabel.clientWidth : 0;
  $: notchWidth = isNotEmpty ? `${nolWidth - 13}px` : 'unset';
  $: c = cls('text-field', {
    fullwidth, outlined, focused,
    noLabel: !fullwidth && !label,
    withLeadingIcon: !!leadingIcon,
    withTrailingIcon: !!trailingIcon
  });
  $: outlineC = cls('notched-outline', { upgraded: true, notched: isNotEmpty });
  $: lineRippleC = cls('line-ripple', { active: focused })
  $: floatingLabelC = cls('floating-label', { floatAbove: isNotEmpty });
  $: props = omit($$props, 'fullwidth', 'leadingIcon', 'trailingIcon', 'label', 'outlined', 'placeholder', 'type');
</script>

<div class={c}>
  {#if leadingIcon}
    <Icon class={subcls(c, 'icon')}>{leadingIcon}</Icon>
  {/if}

  <input {...props}
    {type} {value} {placeholder}
    on:focus={() => focused = true}
    on:blur={() => focused = false}
    on:input={handleInput}
    class={subcls(c, 'input')} aria-label={label}
    on:input on:focus on:blur on:change on:keydown on:keyup on:keypress>

  {#if trailingIcon}
    <Icon class={subcls(c, 'icon')}>{trailingIcon}</Icon>
  {/if}

  {#if outlined}
    <div class={outlineC}>
        <div class={subcls(outlineC, 'leading')}></div>
        {#if label}
          <div class={subcls(outlineC, 'notch')} style="width: {notchWidth}">
            <label class={floatingLabelC} bind:this={notchedOutlineLabel}>{label}</label>
          </div>
        {/if}
        <div class={subcls(outlineC, 'trailing')}></div>
    </div>
  {/if}

  {#if !fullwidth && !outlined && label}
    <label class={floatingLabelC}>{label}</label>
  {/if}

  {#if !outlined}
    <div class={lineRippleC}></div>
  {/if}
</div>
