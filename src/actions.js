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
