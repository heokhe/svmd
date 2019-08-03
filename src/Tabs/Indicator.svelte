<script>
import '@material/tab-indicator/mdc-tab-indicator.scss';
import { MDCTabIndicator } from '@material/tab-indicator';
import { wrap } from '../actions';
import { createClassname } from '../helpers';

export let type = 'underline',
  fade = false;
const mdc = wrap(MDCTabIndicator);

$: {
  if (!['icon', 'underline'].includes(type)) {
    console.warn(`TabIndicator expected the type to be "icon" or "underline", got "${type}"`);
    type = 'underline'
  }
}
$: className = createClassname('tab-indicator', { fade });
$: contentClassname = createClassname('tab-indicator__content', {
  [type === 'icon' ? 'icon' : 'underline']: true
})
</script>

<span use:mdc class={className}>
  <span class={contentClassname}></span>
</span>