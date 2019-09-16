<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { MDCList } from '@material/list';
  import { wrap } from '../actions';
  import { cls, omit } from '../helpers';

  export let dense = false,
    twoLine = false,
    checklist = false,
    radio = false;

  const mdc = wrap(MDCList, {
    initialize(list) {
      list.wrapFocus = true;
    }
  });
  const role = writable('');
  setContext('svmd:list:role', role);

  $: $role = checklist ? 'group' : radio ? 'radiogroup' : 'list';
  $: className = cls('list', { dense, twoLine });
  $: props = omit($$props, 'dense', 'twoLine', 'class', 'checklist', 'radio');
</script>

<ul {...props} class={className} role={$role} use:mdc>
  <slot></slot>
</ul>
