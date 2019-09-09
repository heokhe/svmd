<script>
  import { getContext } from 'svelte';
  import { cls, subcls, omit } from './helpers';
  import { wrap } from './actions';
  import { MDCCheckbox } from '@material/checkbox';

  export let disabled = false,
    checked = false,
    id = undefined;

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

  $: if ($formField && self) $formField.input = self;
  $: c = cls('checkbox', { disabled });
  $: props = omit($$props, 'id', 'checked', 'disabled');
</script>

<div {...props} class={c} use:mdc={checked}>
  <input type="checkbox" class={subcls(c, 'native-control')} {disabled} {id}>
  <div class={subcls(c, 'background')}>
    <svg class={subcls(c, 'checkmark')} viewBox="0 0 24 24">
      <path class={subcls(c, 'checkmark-path')} fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
    </svg>
    <div class={subcls(c, 'mixedmark')}></div>
  </div>
</div>
