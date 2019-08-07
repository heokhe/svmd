<script>
import '@material/tab-bar/mdc-tab-bar.scss';
import { MDCTabBar } from '@material/tab-bar';
import { wrap } from '../actions';
import { createClassname } from '../helpers';
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import Scroller from './Scroller.svelte';

export let active = 0,
  stacked = false,
  spanIndicatorToContent = false,
  narrow = true;

const tabBarData = writable({ stacked, spanIndicatorToContent, narrow });
setContext('tab-bar-data', tabBarData)

const mdc = wrap(MDCTabBar, {
  initialize(_, tabBar) {
    tabBar.activateTab(active)
    tabBar.listen('MDCTabBar:activated', ev => {
      active = ev.detail.index
    })
  },
  update(_, tabBar, params) {
    const { active: n, ...newData } = params;
    tabBarData.set(newData)
    const list = tabBar.tabList_;
    if (n >= list.length || n < 0) {
      const firstOrLastTab = list[n < 0 ? 0 : n - 1];
      if (firstOrLastTab) firstOrLastTab.deactivate()
    } else tabBar.activateTab(n)
  }
});
</script>

<div class="mdc-tab-bar" role="tablist" use:mdc={{ stacked, active, spanIndicatorToContent, narrow }}>
  <Scroller>
    <slot></slot>
  </Scroller>
</div>