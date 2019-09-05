import { MDCRipple } from '@material/ripple';
import { createFunctionWrapper } from './helpers';

/**
 * Creates a Svelte action to wrap MDC components.
 * @example
 * const action = wrap(MDCTopAppBar, {
 *   // all methods have this signature
 *   initialize(component, param) {
 *     console.log('top app bar is initialized')
 *   }
 * })
 * <header use:action>...</header>
 */
export const wrap = (constructor, {
  initialize, beforeDestroy, destroy, update, initAndUpdate, paramDefaultValue = {}
} = {}) => (element, param = paramDefaultValue) => {
  // eslint-disable-next-line new-cap
  const component = new constructor(element),
    fire = createFunctionWrapper(() => [component, param]);
  fire(initialize, initAndUpdate);
  return {
    destroy() {
      fire(beforeDestroy);
      component.destroy();
      fire(destroy);
    },
    // eslint-disable-next-line no-shadow
    update: () => fire(update, initAndUpdate)
  };
};


/**
 * An action to wrap MDCRipple component.
 * @example
 * <button use:ripple>Click me to see the ripple effect!</button>
 */
export const ripple = wrap(MDCRipple, {
  paramDefaultValue: false,
  initialize(rpl, unbounded) {
    rpl.unbounded = !!unbounded;
  }
});
