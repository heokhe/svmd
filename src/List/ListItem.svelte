<script>
  import { ripple } from '../actions';
  import { omit } from '../helpers';
  export let tabindex = void 0,
    href = undefined,
    icon = '';
  $: props = omit($$props, 'href', 'class', icon);
</script>

{#if href !== undefined}
  <a {...props} {href} class="mdc-list-item" use:ripple>
    {#if icon}
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{icon}</i>
    {/if}
    <div class="mdc-list-item__text">
      <slot></slot>
    </div>
  </a>
{:else}
  <li {...props} class="mdc-list-item" use:ripple>
    {#if icon}
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{icon}</i>
    {/if}
    <div class="mdc-list-item__text">
      <slot></slot>
    </div>
  </li>
{/if}
