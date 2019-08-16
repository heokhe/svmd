export const omit = (obj, ...keys) => Object.keys(obj)
  .filter(key => !keys.includes(key))
  .map(key => ({
    [key]: obj[key]
  }))
  .reduce((a, b) => ({ ...a, ...b }), {});

/** @param {string} str */
const camelToKebab = str => str.replace(
  /([A-Z])/g,
  letter => `-${letter.toLowerCase()}`
);

/**
 * @example
 * createClassname('test', {
 *   raised: true,
 *   displayMarkers: true,
 *   align: 'left',
 *   outlined: false
 * });
 * // 'mdc-test mdc-test--raised mdc-test--display-markers mdc-test--align-left'
 */
export const createClassname = (base, modifiers = {}) => [
  `mdc-${base}`,
  ...Object.entries(modifiers)
    .filter(([, v]) => !!v)
    .map(([k, v]) => {
      let string = `mdc-${base}--${camelToKebab(k)}`;
      if (['number', 'string'].includes(typeof v)) string += `-${v}`;
      return string;
    })
].join(' ');

/**
 * @example
 * const oneTwoThree = createOptionalCaller(1, 2, 3)
 * oneTwoThree(console.log) // console.log(1, 2, 3)
 * oneTwoThree(Array) // [1, 2, 3]
 * oneTwoThree(aFunctionThatDoesNotExist) // returns undefined
 */
export const createOptionalCaller = (...args) => f => (typeof f === 'function' ? f(...args) : undefined);
