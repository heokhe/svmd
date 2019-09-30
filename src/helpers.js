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
 * Takes a function that returns an array of arguments,
 * returns a function that takes some items.
 * Applies those arguments to the items that are functions.
 *
 * That might look useless, but I'm using it for calling hooks in `wrap()`.
 * All hooks have the same payload, and each of them may be `undefined` or anything else.
 */
export const createFunctionWrapper = a => (...fns) => fns.forEach(f => (typeof f === 'function' ? f(...a()) : undefined));

export const clamp = (value, { min, max, step }) => {
  if (value >= max) return max;
  if (value <= min) return min;
  return (Math.floor(value / step) * step) + ((value % step) >= (step / 2) ? step : 0);
};

export * from './class';
