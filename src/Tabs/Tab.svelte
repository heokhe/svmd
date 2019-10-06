<script>
import { cls, subcls } from '../helpers';
import { getContext, onMount, afterUpdate } from 'svelte';
import Icon from '../Icon.svelte';
import Indicator from './TabIndicator.svelte';

const randomTabId = () => `svmd-tab-item-${Math.random() * 1e6 >> 0}`;

export let icon = '',
  id = randomTabId();
const tabBar = getContext('SVMD:tab-bar:props'),
  items = getContext('SVMD:tab-bar:items');

let tab,
  width = 0;

const setWidth = () => (width = tab.clientWidth)
let idx = -1;
onMount(() => {
  setWidth();
  idx = $items.push({ element: tab }) - 1;
  $items = $items;
});
afterUpdate(setWidth);

function sync(node) {
  return {
    update(newParams) {
      Object.assign($items[idx], newParams);
      $items = $items;
    },
    destroy() {
      $items.splice(idx, 1);
      $items = $items;
    }
  }
}

$: ready = idx >= 0;
const handleClick = () => ready && $tabBar.activate(id);
$: isActive = ready && $tabBar.active === idx;
$: c = cls('tab', {
  stacked: $tabBar.stacked,
  minWidth: $tabBar.narrow,
  active: isActive
});
</script>

<svelte:window on:resize={setWidth}></svelte:window>

<button bind:this={tab}
  use:sync={{ id, width }}
  on:click={handleClick}
  {id} class={c} role="tab"
  aria-selected="false" tabindex="-1">
  <span class={subcls(c, 'content')}>
    {#if icon}
      <span class={subcls(c, 'icon')} aria-hidden="true">
        <Icon>{icon}</Icon>
      </span>
    {/if}
    <span class={subcls(c, 'text-label')}>
      <slot></slot>
    </span>
  </span>
  <span class="{subcls(c, 'ripple')}"></span>
</button>
