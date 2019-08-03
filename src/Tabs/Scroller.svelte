<script>
import '@material/tab-scroller/mdc-tab-scroller.scss';
import { MDCTabScroller } from '@material/tab-scroller';
import { wrap } from '../actions';
const mdc = wrap(MDCTabScroller)
</script>

<div class="mdc-tab-scroller" use:mdc>
  <div class="mdc-tab-scroller__scroll-area">
    <div class="mdc-tab-scroller__scroll-content">
      <slot></slot>
    </div>
  </div>
</div>