<script>
  import { ripple } from '../actions';
</script>

<li class="mdc-list-item" use:ripple>
  <div class="mdc-list-item__text">
    <slot></slot>
  </div>
</li>