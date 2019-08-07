<script>
import '@material/tab/mdc-tab.scss';
import { MDCTab } from '@material/tab';
import { wrap } from '../actions';
import { createClassname } from '../helpers';
import { getContext } from 'svelte';
import Icon from '../Icon.svelte';
import Indicator from './Indicator.svelte';

export let icon = '';
const mdc = wrap(MDCTab);
$: tabBarData = getContext('tab-bar-data')
$: className = createClassname('tab', {
  stacked: $tabBarData.stacked,
  minWidth: $tabBarData.narrow
});
</script>

<button use:mdc class={className} role="tab" aria-selected="false" tabindex="-1">
  <span class="mdc-tab__content">
    {#if icon}
      <span class="mdc-tab__icon" aria-hidden="true">
        <Icon>{icon}</Icon>
      </span>
    {/if}
    <span class="mdc-tab__text-label"><slot></slot></span>
    {#if $tabBarData.spanIndicatorToContent}
      <Indicator />
    {/if}
  </span>
  {#if !$tabBarData.spanIndicatorToContent}
    <Indicator />
  {/if}
  <span class="mdc-tab__ripple"></span>
</button>