<script>
import '@material/tab-indicator/mdc-tab-indicator.scss';
import { MDCTabIndicator } from '@material/tab-indicator';
import { component } from '../actions';
import { createClassname } from '../helpers';
const action = component(MDCTabIndicator);
export let type = 'underline',
  fade = false;
$: {
  if (!['icon', 'underline'].includes(type)) {
    console.warn(`TabIndicator expected the type to be "icon" or "underline", got "${type}"`);
    type = 'underline'
  }
}
$: className = createClassname('mdc-tab-indicator', { fade });
$: contentClassname = createClassname('mdc-tab-indicator__content', {
  [type === 'icon' ? 'icon' : 'underline']: true
})
</script>

<span use:action class={className}>
  <span class={contentClassname}></span>
</span>