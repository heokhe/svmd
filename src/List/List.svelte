<script>
  import { MDCList } from '@material/list';
  import { wrap } from '../actions';
  import { createClassname } from '../helpers';

  export let dense = false,
    twoLine = false;

  const mdc = wrap(MDCList, {
    initialize(list) {
      list.wrapFocus = true;
      list.singleSelection = true;
      list.selectedIndex = 0;
    }
  })

  $: className = createClassname('list', { dense, twoLine });
</script>

<ul class={className} use:mdc>
  <slot></slot>
</ul>