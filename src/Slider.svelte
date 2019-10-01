<script>
  import { onMount, tick } from 'svelte';
  import { wrap } from './actions';
  import { cls, clamp } from './helpers';

  export let discrete = false,
    disabled = false,
    value = 0,
    min = 0,
    max = 100,
    displayMarkers = false,
    step = undefined;

  /** @type {Element} */
  let root, track, thumb;
  let width = 0;
  let active = false;
  let inTransit = false;

  function setValueFromMouseEvent({ clientX, touches: [touch] = [] }) {
    const x = touch ? touch.clientX : clientX;
    const px = x - root.getBoundingClientRect().x;
    const pr = px / width
    value = clamp((pr * (max - min)) + min, { step, min, max })
  }
  function handleMouseDown(event) {
    const { path, button } = event;
    if (button === 2 || !path.includes(root)) return;
    inTransit = !path.includes(thumb);
    setTimeout(() => (inTransit = false), 200);
    active = true;
    setValueFromMouseEvent(event);
  }
  const handleMouseMove = evt => !evt.touches && active && setValueFromMouseEvent(evt);
  const handleMouseUp = () => active && (active = false);

  $: clampedValue = clamp(value, { min, max, step });
  $: percentage = (clampedValue - min) / (max - min) * 100;
  $: if (thumb) thumb.style.transform = `translateX(${percentage / 100 * width}px) translateX(-50%)`;
  $: if (track) track.style.transform = `scaleX(${percentage / 100})`;
  $: className = cls('slider', { discrete, displayMarkers, active, inTransit });
</script>

<svelte:window
  on:mousemove={handleMouseMove}
  on:mouseup={handleMouseUp}
  on:touchmove={handleMouseDown}
  on:touchend={handleMouseUp}></svelte:window>
<div bind:this={root} bind:clientWidth={width}
  on:mousedown={handleMouseDown} class={className}
  tabindex="0" role="slider"
  aria-valuemin={min} aria-valuemax={max}
  aria-valuenow={clampedValue} aria-disabled={disabled}>
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track" bind:this={track}></div>
      {#if discrete && displayMarkers}
        <div class="mdc-slider__track-marker-container">
          {#each Array((max - min) / step) as _}
            <div class="mdc-slider__track-marker"></div>
          {/each}
        </div>
      {/if}
    </div>
    <div class="mdc-slider__thumb-container" bind:this={thumb}>
      {#if discrete}
        <div class="mdc-slider__pin">
          <span class="mdc-slider__pin-value-marker">{clampedValue}</span>
        </div>
      {/if}
      <svg class="mdc-slider__thumb" width="21" height="21">
        <circle cx="10.5" cy="10.5" r="7.875"></circle>
      </svg>
      <div class="mdc-slider__focus-ring"></div>
    </div>
 </div>
