<script>
  import { getContext } from 'svelte';
  import { cls, subcls, omit } from './helpers';
  import { wrap } from './actions';
  import { MDCRadio } from '@material/radio';

  export let disabled = false,
    group,
    value;

  let self, event;
  const formField = getContext('SVMD:form-field'),
    mdc = wrap(MDCRadio, {
      initialize(radio) {
        self = radio;
        event = radio.root_.addEventListener('change', () => {
          if (radio.checked) group = value;
        });
      },
      destroy({ root_: el }) {
        el.removeEventListener(event)
      }
    });

  $: if (formField && self) {
    formField.update(ff => {
      ff.input = self;
    });
  }
  $: checked = group === value;
  $: c = cls('radio', { disabled });
  $: props = omit($$props, 'value', 'group', 'disabled', 'class');
</script>

<div class="{c} {$$props.class}" use:mdc>
  <input
    {...props}
    type="radio" {checked} {value} {disabled}
    class={subcls(c, 'native-control')}>
  <div class={subcls(c, 'background')}>
    <div class={subcls(c, 'inner-circle')}></div>
    <div class={subcls(c, 'outer-circle')}></div>
  </div>
</div>
