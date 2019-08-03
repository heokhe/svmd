export const omit = (obj, ...keys) => Object.keys(obj)
  .filter(key => !keys.includes(key))
  .map(key => ({
    [key]: obj[key]
  }))
  .reduce((a, b) => ({ ...a, ...b }), {});

/**
 * @example
 * createClassname('button', { raised: true, unelevated: true, outlined: false });
 * // 'mdc-button mdc-button--raised mdc-button--unelevated'
 */
export const createClassname = (base, modifiers = {}) => [
  `mdc-${base}`,
  ...Object.entries(modifiers)
    .filter(([, v]) => !!v)
    .map(([k]) => `mdc-${base}--${k}`)
].join(' ');

/**
 * @example
 * const oneTwoThree = createOptionalCaller(1, 2, 3)
 * oneTwoThree(console.log) // console.log(1, 2, 3)
 * oneTwoThree(aFunctionThatDoesNotExist) // returns undefined
 */
export const createOptionalCaller = (...args) => f => (typeof f === 'function' ? f(...args) : undefined);
