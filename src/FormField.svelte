<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  // import { MDCFormField } from '@material/form-field'
  import { wrap } from './actions';
  import { cls, omit } from './helpers';

  export let alignEnd = false;
  let data = writable(null);
  setContext('SVMD:form-field', data);
  // const mdc = wrap(MDCFormField, {
  //   initialize: ff => data.set(ff)
  // })
</script>

<div {...omit($$props, 'alignEnd')}
  class="{cls('form-field', { alignEnd })} {$$props.class}"
  >
  <slot></slot>
</div>
