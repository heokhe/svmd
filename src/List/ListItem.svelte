<script>
  import { ripple } from '../actions';
  export let tabindex = void 0;
</script>

<li class="mdc-list-item" use:ripple {tabindex}>
  <div class="mdc-list-item__text">
    <slot></slot>
  </div>
</li>
