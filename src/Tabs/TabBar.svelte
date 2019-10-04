<script>
import { wrap } from '../actions';
import { createClassname } from '../helpers';
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import Scroller from './TabScroller.svelte';
import Indicator from './TabIndicator.svelte';

export let active = 0,
  stacked = false,
  narrow = false;

let el;
const items = writable([]);
const tabBar = writable({
  stacked,
  narrow,
  active,
  activate(id) {
    active = $items.findIndex(tab => tab.id === id);
  }
});
setContext('SVMD:tab-bar-tabBar', tabBar);
setContext('SVMD:tab-bar-items', items);

$: activeTab = $items[$tabBar.active] || {};
$: activeEl = activeTab.element;
$: indicatorPosition = el && activeEl ? activeEl.getBoundingClientRect().x - el.getBoundingClientRect().x : 0;
$: $tabBar.active = active;
$: $tabBar.stacked = stacked;
$: $tabBar.narrow = narrow;
</script>

<div class="mdc-tab-bar" role="tablist" bind:this={el}>
  <Scroller>
    <slot></slot>
    <Indicator active={!!activeTab} left={indicatorPosition} width="{activeTab.width || 0}px" />
  </Scroller>
</div>
