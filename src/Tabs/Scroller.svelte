<script>
import '@material/tab-scroller/mdc-tab-scroller.scss';
import { MDCTabScroller } from '@material/tab-scroller';
import { component } from '../actions';
const action = component(MDCTabScroller)
</script>

<div class="mdc-tab-scroller" use:action>
  <div class="mdc-tab-scroller__scroll-area">
    <div class="mdc-tab-scroller__scroll-content">
      <slot></slot>
    </div>
  </div>
</div>