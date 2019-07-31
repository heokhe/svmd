import { MDCRipple } from '@material/ripple';

export function rippleAction(node, { unbounded = false } = {}) {
  const r = new MDCRipple(node);
  r.unbounded = !!unbounded;
  return {
    destroy() {
      r.destroy();
    }
  };
}

export function component(node, mdc) {
  // eslint-disable-next-line new-cap
  const instance = new mdc(node);
  return {
    destroy() {
      instance.destroy();
    }
  };
}
