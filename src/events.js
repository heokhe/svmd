export function createEventToggler(el, handlers) {
  return attach => {
    for (const type in handlers) {
      const handler = handlers[type];
      if (attach) el.addEventListener(type, handler);
      else el.removeEventListener(type, handler);
    }
  };
}
