<script>
  import { cls, subcls, omit } from './helpers';

  export let disabled = false,
    group = undefined,
    value = undefined,
    checked = undefined;

  $: usesGroup = Array.isArray(group);

  let input;
  function handleClick() {
    const isChecked = input.checked;
    if (usesGroup) {
      const index = group.indexOf(value);
      if (!isChecked && index !== -1) group.splice(index, 1);
      else if (isChecked && index === -1) group.push(value);
      group = group;
    } else checked = isChecked;
  }

  $: checked = usesGroup ? group.includes(value) : checked;
  $: c = cls('checkbox', { disabled });
  $: props = omit($$props, 'checked', 'disabled', 'class', 'group', 'value');
</script>

<div class="{c} {$$props.class}">
  <input bind:this={input}
    on:change={handleClick}
    {...props}
    type="checkbox" 
    {disabled} {checked}
    class={subcls(c, 'native-control')}>
  <div class={subcls(c, 'background')}>
    <svg class={subcls(c, 'checkmark')} viewBox="0 0 24 24">
      <path class={subcls(c, 'checkmark-path')} fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
    </svg>
    <div class={subcls(c, 'mixedmark')}></div>
  </div>
</div>
