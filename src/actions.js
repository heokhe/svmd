import { MDCRipple } from '@material/ripple';

export function rippleAction(node, unbounded = true) {
  console.log('Debug: rippleAction -> unbounded', unbounded);
  const r = new MDCRipple(node);
  r.unbounded = !!unbounded;
  return {
    destroy() {
      r.destroy();
    }
  };
}
