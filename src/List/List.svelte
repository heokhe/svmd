<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  // import { MDCList } from '@material/list';
  import { wrap } from '../actions';
  import { cls, omit } from '../helpers';

  export let dense = false,
    twoLine = false,
    checkbox = false,
    radio = false,
    singleSelection = false,
    selectedIndex = -1,
    nonInteractive = false;

  // const mdc = wrap(MDCList, {
  //   initialize(list) {
  //     list.wrapFocus = true;
  //     list.listen('MDCList:action', ({ detail: { index } }) => {
  //       selectedIndex = index;
  //     })
  //   },
  //   initAndUpdate(list, { singleSelection, selectedIndex: idx }) {
  //     list.singleSelection = !!singleSelection;
  //     if (singleSelection) list.selectedIndex = idx;
  //   }
  // });

  const role = writable('');
  setContext('svmd:list:role', role);
  $: $role = checkbox ? 'group' : radio ? 'radiogroup' : singleSelection ? 'listbox' : 'list';

  $: c = cls('list', { dense, twoLine, nonInteractive });
  $: props = omit($$props, 'dense', 'twoLine', 'class', 'checkbox', 'radio');
</script>

<ul {...props} class={c} role={$role}
  >
  <slot></slot>
</ul>
