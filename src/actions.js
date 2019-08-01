import { MDCRipple } from '@material/ripple';

const createHookCaller = (...args) => hook => (typeof hook === 'function' ? hook(...args) : undefined);

export function createComponentAction(constructor, {
  initialize, beforeDestroy, destroy, update
} = {}) {
  return (node, params) => {
    // eslint-disable-next-line new-cap
    const instance = new constructor(node),
      fire = createHookCaller(node, instance, params);
    fire(initialize);
    return {
      destroy() {
        fire(beforeDestroy);
        instance.destroy();
        fire(destroy);
      },
      update: parameter => {
        createHookCaller(node, instance, parameter)(update);
      }
    };
  };
}

export const ripple = createComponentAction(MDCRipple, {
  initialize(_, rpl, { unbounded = false } = {}) {
    rpl.unbounded = !!unbounded;
  }
});

export const component = constructor => createComponentAction(constructor, {});
