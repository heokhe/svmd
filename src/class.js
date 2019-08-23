/** @param {string} str */
const camelToKebab = str => str.replace(
  /([A-Z])/g,
  letter => `-${letter.toLowerCase()}`
);

/**
 * @typedef {string | number | boolean} ModifierValue
 * @typedef {Object<string, ModifierValue>} ModifierObject
 */

/**
 * Creates a classname string, used by MDC components.
 * @param {string} componentName
 * @param {ModifierObject} [modifiers={}]
 * @example
 * cls('button', { x: true, b: 0, y: false, a: 'foo' })
 * //=> 'mdc-button mdc-button--x mdc-button--b-0 mdc-button--a-foo'
 * // 'y' is ignored because its value is not truthy or zero
 */
export const cls = (componentName, modifiers = {}) => [
  `mdc-${componentName}`,
  ...Object.entries(modifiers)
    .filter(([, v]) => !!v || v === 0)
    .map(([k, v]) => {
      let string = `mdc-${componentName}--${camelToKebab(k)}`;
      if (['number', 'string'].includes(typeof v)) string += `-${v}`;
      return string;
    })
].join(' ');

/**
 * Creates a classname string for s sub-component (tab indicators, leading/trailing icons, etc.)
 * @param {string} parentClass
 * @param {string} componentName
 * @param {ModifierObject} [modifiers]
 */
export const subcls = (parentClass, componentName, modifiers) => {
  const baseComponentName = parentClass.split(' ')[0].replace(/^mdc-/, '');
  return cls(`${baseComponentName}__${componentName}`, modifiers);
};
