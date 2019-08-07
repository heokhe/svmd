<script>
  import '@material/list/mdc-list.scss';
  import { MDCList } from '@material/list';
  import { wrap } from '../actions';
  import { createClassname } from '../helpers';

  export let dense = false,
    twoLine = false;

  const mdc = wrap(MDCList)

  $: className = createClassname('list', { dense, twoLine });
</script>

<ul class={className} use:mdc>
  <slot></slot>
</ul>