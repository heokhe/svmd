<script>
  import { cls } from './helpers';

  export let checked = false;

  function handleChange(event) {
    const input = event.target;
    checked = input.checked;
  }

  $: c = cls('switch', { checked });
</script>

<div class={c}>
  <div class="mdc-switch__track"></div>
  <div class="mdc-switch__thumb-underlay">
    <div class="mdc-switch__thumb">
      <input on:change={handleChange} type="checkbox" class="mdc-switch__native-control" role="switch">
    </div>
  </div>
</div>
