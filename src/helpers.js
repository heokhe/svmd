export const omit = (obj, ...keys) => Object.keys(obj)
  .filter(key => !keys.includes(key))
  .map(key => ({
    [key]: obj[key]
  }))
  .reduce((a, b) => ({ ...a, ...b }), {});

const camelToKebab = str => str.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`);

/**
 * @example
 * createClassname('button', {
 *   raised: true,
 *   displayMarkers: true,
 *   outlined: false
 * });
 * // 'mdc-button mdc-button--raised mdc-button--display-markers'
 */
export const createClassname = (base, modifiers = {}) => [
  `mdc-${base}`,
  ...Object.entries(modifiers)
    .filter(([, v]) => !!v)
    .map(([k]) => `mdc-${base}--${camelToKebab(k)}`)
].join(' ');

/**
 * @example
 * const oneTwoThree = createOptionalCaller(1, 2, 3)
 * oneTwoThree(console.log) // console.log(1, 2, 3)
 * oneTwoThree(Array) // [1, 2, 3]
 * oneTwoThree(aFunctionThatDoesNotExist) // returns undefined
 */
export const createOptionalCaller = (...args) => f => (typeof f === 'function' ? f(...args) : undefined);
