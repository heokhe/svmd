<script>
import { MDCTab } from '@material/tab';
import { wrap } from '../actions';
import { cls, subcls } from '../helpers';
import { getContext } from 'svelte';
import Icon from '../Icon.svelte';
import Indicator from './TabIndicator.svelte';

export let icon = '';
const tabBarData = getContext('tab-bar-data')
const mdc = wrap(MDCTab);
$: c = cls('tab', {
  stacked: $tabBarData.stacked,
  minWidth: $tabBarData.narrow
});
</script>

<button use:mdc class={c} role="tab" aria-selected="false" tabindex="-1">
  <span class={subcls(c, 'content')}>
    {#if icon}
      <span class={subcls(c, 'icon')} aria-hidden="true">
        <Icon>{icon}</Icon>
      </span>
    {/if}
    <span class={subcls(c, 'text-label')}>
      <slot></slot>
    </span>
    {#if $tabBarData.spanIndicatorToContent}
      <Indicator />
    {/if}
  </span>
  {#if !$tabBarData.spanIndicatorToContent}
    <Indicator />
  {/if}
  <span class="{subcls(c, 'ripple')}"></span>
</button>
