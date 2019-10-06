<script>
import { wrap } from './actions';
import { cls, subcls, nextFrame } from './helpers';
export let dismissible = false,
  modal = false,
  open = false,
  mode = 'modal',
  withHeader = false;

const onUpdate = () => {
  if (open) openTheDrawer();
  return {
    update: ({ open: isOpen }) => console.log({ open, isOpen, active }) || (!active ? openTheDrawer : closeTheDrawer)()
  }
}

let active = false;
let opening = false;
let animate = false;
let closing = false;
let drawer;
$: type = modal ? 'modal' : 'dismissible';
function transitionEnd() {
  return new Promise(resolve => {
    drawer.addEventListener('transitionend', async () => {
      await nextFrame();
      resolve();
    }, { once: true })
  })
}
async function openTheDrawer() {
  active = true;
  await nextFrame();
  animate = true;
  await nextFrame();
  opening = true;
  await nextFrame();
  animate = false;
  await transitionEnd();
  opening = false;
}
async function closeTheDrawer() {
	console.log('Debug: closing 3', closing)
  closing = true;
  opening = false;
  animate = false;
  await transitionEnd();
  closing = false;
  active = false;
}

$: c = cls('drawer', { [type]: true, open: active, opening, animate, closing })
</script>

<aside class={c} bind:this={drawer} use:onUpdate={{ open }}>
  {#if withHeader}
    <div class={subcls(c, 'header')}>
      <div class={subcls(c, 'title')}>
        <slot name="title"></slot>
      </div>
      <div class={subcls(c, 'subtitle')}>
        <slot name="subtitle"></slot>
      </div>
    </div>
  {/if}
  <div class={subcls(c, 'content')}>
    <slot></slot>
  </div>
</aside>
{#if modal}
  <div on:click={closeTheDrawer} class="mdc-drawer-scrim"></div>
{/if}
