<script>
  import { cls, subcls, omit } from './helpers';

  export let disabled = false,
    group,
    value;

  let input;
  function handleChange() {
    if (input.checked) group = value;
  }

  $: checked = group === value;
  $: c = cls('radio', { disabled });
  $: props = omit($$props, 'value', 'group', 'disabled', 'class');
</script>

<div class="{c} {$$props.class}" on:click={handleChange}>
  <input bind:this={input}
    {...props}
    type="radio" {checked} {value} {disabled}
    class={subcls(c, 'native-control')}>
  <div class={subcls(c, 'background')}>
    <div class={subcls(c, 'inner-circle')}></div>
    <div class={subcls(c, 'outer-circle')}></div>
  </div>
</div>
