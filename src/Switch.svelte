<script>
  import '@material/switch/mdc-switch.scss';
  import { wrap } from './actions';
  import { createClassname } from './helpers';
  import { MDCSwitch } from '@material/switch';

  export let checked = false;
  const mdc = wrap(MDCSwitch, {
    initialize(_, mdcSwitch) {
      mdcSwitch.checked = checked;
      mdcSwitch.listen('change', () => {
        checked = mdcSwitch.checked;
      })
    },
    update(_, mdcSwitch, checked) {
      mdcSwitch.checked = checked;
    }
  })
</script>

<div class="mdc-switch" use:mdc={checked}>
  <div class="mdc-switch__track"></div>
  <div class="mdc-switch__thumb-underlay">
    <div class="mdc-switch__thumb">
      <input type="checkbox" class="mdc-switch__native-control" role="switch">
    </div>
  </div>
</div>
<!-- <label for="basic-switch">off/on</label> -->