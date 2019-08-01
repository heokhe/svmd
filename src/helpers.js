export const omit = (obj, ...keys) => Object.keys(obj)
  .filter(key => !keys.includes(key))
  .map(key => ({
    [key]: obj[key]
  }))
  .reduce((a, b) => Object.assign({}, a, b), {});

export function createClassname(base, modifiers = {}) {
  const classnames = [base];
  for (const key in modifiers) {
    const value = modifiers[key];
    if (value) classnames.push(`${base}--${key}`);
  }
  return classnames.join(' ');
}
