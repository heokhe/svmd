<script>
  import Icon from '../Icon.svelte';
  export let icon = false;
</script>

{#if icon}
  <Icon class="mdc-list-item__meta">
    <slot></slot>
  </Icon>
{:else}
  <div class="mdc-list-item__meta">
    <slot></slot>
  </div>
{/if}
