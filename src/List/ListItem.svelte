<script>
  import Icon from '../Icon.svelte';
  import { ripple } from '../actions';
  import { omit, cls, subcls } from '../helpers';
  export let tabindex = void 0,
    href = undefined,
    icon = '';
  $: props = omit($$props, 'href', 'class', 'icon');
  $: c = cls`list-item`;
</script>

{#if href !== undefined}
  <a {...props} {href} class="{c} {$$props.class}" use:ripple>
    {#if icon}
      <Icon aria-hidden="true" class={subcls(c, 'graphic')}>{icon}</Icon>
    {/if}
    <div class={subcls(c, 'text')}>
      <slot></slot>
    </div>
  </a>
{:else}
  <li {...props} class="{c} {$$props.class}" use:ripple>
    {#if icon}
      <Icon aria-hidden="true" class={subcls(c, 'graphic')}>{icon}</Icon>
    {/if}
    <div class={subcls(c, 'text')}>
      <slot></slot>
    </div>
  </li>
{/if}
