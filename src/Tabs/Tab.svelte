<script>
import '@material/tab/mdc-tab.scss';
import { MDCTab } from '@material/tab';
import { component } from '../actions';
import { createClassname } from '../helpers';
import Icon from '../Icon.svelte';
import Indicator from './Indicator.svelte';
const action = component(MDCTab);
export let icon = '';
$: className = createClassname('mdc-tab')
</script>

<button use:action class={className} role="tab" aria-selected="false" tabindex="-1">
  <span class="mdc-tab__content">
    {#if icon}
      <span class="mdc-tab__icon" aria-hidden="true">
        <Icon>{icon}</Icon>
      </span>
    {/if}
    <span class="mdc-tab__text-label"><slot></slot></span>
  </span>
  <Indicator />
  <span class="mdc-tab__ripple"></span>
</button>