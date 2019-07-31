<script>
import '@material/top-app-bar/mdc-top-app-bar.scss';
import { MDCTopAppBar } from '@material/top-app-bar';
import { onMount, onDestroy } from 'svelte';

export let fixed = false;
let root, mdc;
onMount(() => {
  mdc = new MDCTopAppBar(root);
})
onDestroy(() => {
  mdc.destroy()
})
</script>

<header class="mdc-top-app-bar" bind:this={root} class:mdc-top-app-bar--fixed={fixed}>
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
      <span class="mdc-top-app-bar__title">Title</span>
    </section>
  </div>
</header>