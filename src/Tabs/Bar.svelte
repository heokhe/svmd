<script>
import '@material/tab-bar/mdc-tab-bar.scss';
import { MDCTabBar } from '@material/tab-bar';
import { createComponentAction } from '../actions';
import { createClassname } from '../helpers';
import Scroller from './Scroller.svelte';

export let active = 0;
const action = createComponentAction(MDCTabBar, {
  initialize(_, tabBar) {
    tabBar.activateTab(active)
    tabBar.listen('MDCTabBar:activated', ev => {
      active = ev.detail.index
    })
  },
  update(_, tabBar, n) {
    const list = tabBar.tabList_;
    if (n >= list.length || n < 0) {
      const firstOrLastTab = list[n < 0 ? 0 : n - 1];
      if (firstOrLastTab) firstOrLastTab.deactivate()
    } else {
      tabBar.activateTab(n)
    }
  }
});
</script>

<div class="mdc-tab-bar" role="tablist" use:action={active}>
  <Scroller>
    <slot></slot>
  </Scroller>
</div>