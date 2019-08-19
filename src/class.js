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

// export const subcls = (parentClassName, componentName, modifiers = {}) => {
//   return `${parentClassName}__${componentName}`;
// };

// export class ClassName {
//   /**
//    * @param {string} base
//    * @param {ModifierObject} [modifiers]
//    */
//   constructor(base, modifiers = {}) {
//     this.base = base;
//     this.modifiers = modifiers;
//   }

//   /**
//    * @param {string} base
//    * @param {ModifierObject} [modifiers]
//    */
//   sub(componentName, modifiers = {}) {
//     return new ClassName(`${this.base}__${componentName}`, modifiers).toString();
//   }

//   /**
//    * @param {string|ModifierObject} modifierNameOrObject
//    * @param {ModifierValue} [value=true]
//    */
//   apply(modifierNameOrObject, value = true) {
//     return new ClassName(this.base, {
//       ...this.modifiers,
//       ...(typeof modifierNameOrObject === 'object' ? modifierNameOrObject : {
//         [modifierNameOrObject]: value
//       })
//     });
//   }

//   toString() {
//     const { base, modifiers } = this,
//       firstClassName = `mdc-${base}`,
//       classList = [firstClassName];
//     for (const [modifier, value] of Object.entries(modifiers)) {
//       if (!!value || value === 0) {
//         let string = `${firstClassName}--${camelToKebab(modifier)}`;
//         if (['number', 'string'].includes(typeof value)) string += `-${value}`;
//         classList.push(string);
//       }
//     }
//     return classList.join(' ');
//   }
// }

// export const className = (base, modifiers) => new ClassName(base, modifiers);
// export const cls = className;
