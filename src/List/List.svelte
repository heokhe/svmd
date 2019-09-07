<script>
  import { MDCList } from '@material/list';
  import { wrap } from '../actions';
  import { cls, omit } from '../helpers';

  export let dense = false,
    twoLine = false;

  const mdc = wrap(MDCList, {
    initialize(list) {
      list.wrapFocus = true;
      list.singleSelection = true;
      list.selectedIndex = 0;
    }
  })

  $: className = cls('list', { dense, twoLine });
  $: props = omit($$props, 'dense', 'twoLine', 'class');
</script>

<ul {...props} class={className} use:mdc>
  <slot></slot>
</ul>
