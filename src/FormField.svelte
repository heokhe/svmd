<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { MDCFormField } from '@material/form-field'
  import { wrap } from './actions';

  let data = writable(null);
  setContext('SVMD:form-field', data);
  const mdc = wrap(MDCFormField, {
    initialize(ff) {
      data.set(ff);
    }
  })
</script>

<div {...$$props} class="mdc-form-field {$$props.class}" use:mdc>
  <slot></slot>
</div>
