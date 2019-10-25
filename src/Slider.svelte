<script>
  import { onMount } from 'svelte';
  import { wrap } from './actions';
  import { createEventToggler } from './events';
  import { cls, clamp } from './helpers';

  export let discrete = false,
    disabled = false,
    value = 0,
    min = 0,
    max = 100,
    displayMarkers = false,
    step = undefined;

  let root, track, thumb;
  let width = 0;
  let active = false;
  let focus = false;
  const layout = () => (width = root.clientWidth);
  onMount(layout);

  function setValueFromMouseEvent({ clientX, touches: [touch] = [] }) {
    const x = touch ? touch.clientX : clientX;
    const px = x - root.getBoundingClientRect().x;
    const pr = px / width
    value = clamp((pr * (max - min)) + min, { step, min, max })
  }
  function handleMouseDown(event) {
    if (!active) {
      active = true;
      layout();
    }
    const { path, button } = event;
    if (button === 2 || !path.includes(root)) return;
    setValueFromMouseEvent(event);
  }
  function handleKeydown(event) {
    if (!focus) focus = true;
    const { key } = event,
      st = step || 1,
      delta = key === 'ArrowLeft' ? -st :
        key === 'ArrowRight' ? st :
        key === 'ArrowUp' ? st :
        key === 'ArrowDown' ? -st :
        key === 'PageUp' ? st * 4 :
        key === 'PageDown' ? st * -4 :
        key === 'Home' ? -value :
        key === 'End' ? max - value : undefined;
    if (delta !== undefined) {
      event.preventDefault();
      value = clamp(value + delta, { min, max, step })
    }
  }
  const handleMouseMove = evt => !evt.touches && active && setValueFromMouseEvent(evt);
  const handleMouseUp = () => (layout(), active && (active = false));
  const toggleWindowListeners = createEventToggler(window, {
    mousemove: handleMouseMove,
    mouseup: handleMouseUp,
    touchmove: handleMouseDown,
    touchend: handleMouseUp
  });

  $: toggleWindowListeners(active) || console.log(active);
  $: if (discrete && displayMarkers && !step) step = 1;
  $: clampedValue = clamp(value, { min, max, step });
  $: percentage = (clampedValue - min) / (max - min) * 100;
  $: if (thumb) thumb.style.transform = `translateX(${percentage / 100 * width}px) translateX(-50%)`;
  $: if (track) track.style.transform = `scaleX(${percentage / 100})`;
  $: className = cls('slider', { discrete, displayMarkers, active, focus });
</script>

<svelte:window on:resize={() => (width = root.clientWidth)}></svelte:window>

<div bind:this={root}
  on:focus={() => focus = !active}
  on:blur={() => focus = false}
  on:mousedown={handleMouseDown}
  on:touchstart={handleMouseDown}
  on:keydown={handleKeydown}
  class={className} tabindex="0" role="slider"
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
