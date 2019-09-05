<script>
  import { ripple } from '../actions';
  export let tabindex = void 0,
    href = undefined;
</script>

{#if href !== undefined}
  <a {href} class="mdc-list-item" use:ripple {tabindex}>
    <div class="mdc-list-item__text">
      <slot></slot>
    </div>
  </a>
{:else}
  <li class="mdc-list-item" use:ripple {tabindex}>
    <div class="mdc-list-item__text">
      <slot></slot>
    </div>
  </li>
{/if}
