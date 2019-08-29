<script>
  import { cls, subcls } from './helpers';
  import { wrap } from './actions';
  import { MDCCheckbox } from '@material/checkbox';

  export let disabled = false,
    checked = false;
  
  const mdc = wrap(MDCCheckbox, {
    initialize(checkbox) {
      checkbox.checked = checked;
    }
  })

  $: c = cls('checkbox', { disabled })
</script>

<div class={c}>
  <input type="checkbox" class={subcls(c, 'native-control')} {disabled}>
  <div class={subcls(c, 'background')}>
    <svg class={subcls(c, 'checkmark')} viewBox="0 0 24 24">
      <path class={subcls(c, 'checkmark-path')} fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
    </svg>
    <div class={subcls(c, 'mixedmark')}></div>
  </div>
</div>
