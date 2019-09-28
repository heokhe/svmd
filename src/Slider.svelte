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
    step = 0;

  /** @type {Element} */
  let root, track, thumb;
  let width = 0;
  let mousedown = false;

  function setValueFromMouseEvent(event) {
    const { clientX: x } = event.touches ? event.touches[0] : event;
    const px = x - root.getBoundingClientRect().x;
    const pr = px / width
    value = clamp((pr * (max - min)) + min, { step, min, max })
  }
  function handleMouseDown(event) {
    mousedown = true;
    setValueFromMouseEvent(event);
  }
  function handleMouseMove(event) {
    if (mousedown) setValueFromMouseEvent(event);
  }
  const handleMouseUp = () => mousedown && (mousedown = false);
  $: percentage = (value - min) / (max - min) * 100;
  $: if (thumb) thumb.style.transform = `translateX(${percentage / 100 * width}px) translateX(-50%)`;
  $: if (track) track.style.transform = `scaleX(${percentage / 100})`
  $: className = cls('slider', {
    discrete, displayMarkers,
    active: mousedown, /* inTransit: mousedown */
  });
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} on:touchmove={handleMouseDown} on:touchend={handleMouseUp}></svelte:window>
<div bind:this={root} bind:clientWidth={width}
  on:mousedown={handleMouseDown}
  class={className}
  tabindex="0" role="slider"
  aria-valuemin={min} aria-valuemax={max}
  aria-valuenow={value} data-step={step}
  aria-disabled={disabled}>
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track" bind:this={track}></div>
      {#if discrete && displayMarkers}
        <div class="mdc-slider__track-marker-container"></div>
      {/if}
    </div>
    <div class="mdc-slider__thumb-container" bind:this={thumb}>
      {#if discrete}
        <div class="mdc-slider__pin">
          <span class="mdc-slider__pin-value-marker">{value}</span>
        </div>
      {/if}
      <svg class="mdc-slider__thumb" width="21" height="21">
        <circle cx="10.5" cy="10.5" r="7.875"></circle>
      </svg>
      <div class="mdc-slider__focus-ring"></div>
    </div>
 </div>
