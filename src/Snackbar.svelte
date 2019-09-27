<script>
  import { cls, subcls } from './helpers';
  import { wrap } from './actions';

  export let active = false,
    duration = 5,
    stacked = false,
    leading = false;

  let opening = false,
    open = false,
    closing = false,
    timer = null;

  const setTimer = () => (timer = setTimeout(closeTheSnackbar, duration * 1000));
  function openTheSnachbar() {
    closing = false;
    opening = true;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        open = true;
        opening = false;
        setTimer();
      })
    })
  }
  function closeTheSnackbar() {
    clearTimeout(timer);
    timer = null;
    closing = true;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        open = false;
      })
    })
  }
  $: (active ? openTheSnachbar : closeTheSnackbar)()

  $: c = cls('snackbar', { stacked, leading, opening, open, closing });
</script>

<div  class={c}>
  <div class={subcls(c, 'surface')}>
    <div class={subcls(c, 'label')}>
      <slot></slot>
    </div>
    <div class="mdc-snackbar__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</div>
