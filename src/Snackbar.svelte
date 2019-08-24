<script>
  import { cls, subcls } from './helpers';
  import { wrap } from './actions';
  import { MDCSnackbar } from '@material/snackbar';

  export let active = false,
    timeout = 5,
    stacked = false,
    leading = false;

  const mdc = wrap(MDCSnackbar, {
    initialize(snackbar, params) {
      snackbar.timeoutMs = timeout * 1000;
      for (const event of ['closing', 'opening']) {
        snackbar.listen(`MDCSnackbar:${event}`, () => {
          active = event === 'opening';
        })
      }
    },
    update(snackbar, params) {
      return params.active ? snackbar.open() : snackbar.close();
    }
  });

  $: c = cls('snackbar', { stacked, leading });
</script>

<div use:mdc={{ active }} class={c}>
  <div class={subcls(c, 'surface')}>
    <div class={subcls(c, 'label')}>
      <slot></slot>
    </div>
    <div class="mdc-snackbar__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</div>
