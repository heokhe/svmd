<script>
  import { getContext } from 'svelte';
  import { cls, subcls, omit } from './helpers';
  import { wrap } from './actions';
  import { MDCCheckbox } from '@material/checkbox';

  export let disabled = false,
    checked = false;

  let self, event;
  const formField = getContext('SVMD:form-field'),
    mdc = wrap(MDCCheckbox, {
      initialize(checkbox) {
        self = checkbox;
        event = checkbox.root_.addEventListener('change', () => {
          checked = checkbox.checked
        });
      },
      destroy({ root_: el }) {
        el.removeEventListener(event)
      },
      initAndUpdate(checkbox, checked) {
        checkbox.checked = checked;
      }
    });

  $: if (formField && self) {
    formField.update(ff => {
      ff.input = self;
    });
  }
  $: c = cls('checkbox', { disabled });
  $: props = omit($$props, 'checked', 'disabled', 'class');
</script>

<div class="{c} {$$props.class}" use:mdc={checked}>
  <input
    {...props}
    type="checkbox" {disabled}
    class={subcls(c, 'native-control')}>
  <div class={subcls(c, 'background')}>
    <svg class={subcls(c, 'checkmark')} viewBox="0 0 24 24">
      <path class={subcls(c, 'checkmark-path')} fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
    </svg>
    <div class={subcls(c, 'mixedmark')}></div>
  </div>
</div>
