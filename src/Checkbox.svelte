<script>
  import { getContext } from 'svelte';
  import { cls, subcls, omit } from './helpers';
  import { wrap } from './actions';
  import { MDCCheckbox } from '@material/checkbox';

  export let disabled = false,
    group = undefined,
    value = undefined,
    checked = undefined;

  $: usesGroup = Array.isArray(group);

  function handleChange(checkbox) {
    const isChecked = checkbox.checked;
    if (usesGroup) {
      const index = group.indexOf(value);
      if (!isChecked && index !== -1) group.splice(index, 1);
      else if (isChecked && index === -1) group.push(value);
      group = group;
    } else checked = isChecked;
  }

  let event;
  const formField = getContext('SVMD:form-field'),
    mdc = wrap(MDCCheckbox, {
      initialize(checkbox) {
        event = checkbox.root_.addEventListener('change', () => handleChange(checkbox));
        if (formField) formField.update(ff => ff && (ff.input = checkbox))
      },
      initAndUpdate(checkbox, { checked, value, group }) {
        checkbox.checked = usesGroup ? group.includes(value) : checked;
      },
      destroy: ({ root_: el }) => el.removeEventListener(event)
    });

  $: c = cls('checkbox', { disabled });
  $: props = omit($$props, 'checked', 'disabled', 'class', 'group', 'value');
</script>

<div class="{c} {$$props.class}" use:mdc={{ checked, value, group }}>
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
