/* eslint-disable no-await-in-loop, import/no-extraneous-dependencies, no-console */
const { parse } = require('sveltedoc-parser'),
  { resolve, basename } = require('path'),
  globby = require('globby'),
  {
    unlink, readFile, readdir: readDir, writeFile: write
  } = require('fs').promises;

const PROJECT_ROOT = resolve(__dirname, '../..'),
  SRC = resolve(PROJECT_ROOT, 'src'),
  EMPTY_CELL = '&ndash;',
  OUTPUT_PATH = resolve(PROJECT_ROOT, 'docs/components');

const startTime = Date.now();
(async () => {
  // delete previously generated files.
  for (const mdFile of await readDir(OUTPUT_PATH)) await unlink(resolve(OUTPUT_PATH, mdFile));

  const files = await globby(resolve(SRC, '**/*.svelte'));
  for (const file of files) {
    const componentName = basename(file, '.svelte'),
      contents = (await readFile(file)).toString();

    /** @type {import('sveltedoc-parser/typings').SvelteComponentDoc} */
    const component = await parse({
      fileContent: contents,
      version: 3
    });

    let md = `# ${componentName}\n`;
    md += `## Importing\n\`\`\`js\nimport { ${componentName} } from 'svmd';\n\`\`\`\n`;

    const props = component.data.filter(d => d.visibility === 'public');
    md += '## Props\n';
    if (props.length) {
      md += '| Name | Description | Type | Default value\n';
      md += '| - | - | - | -\n';
      for (const {
        description, name, type, value: defaultValue
      } of props) {
        const defaultValue2 = defaultValue === undefined ? EMPTY_CELL : `\`${defaultValue}\``;
        md += `| \`${name}\` | ${description || EMPTY_CELL} | \`${type.text}\` | ${defaultValue2}\n`;
      }
    } else md += `\`<${componentName}>\` has no props.`;

    await write(resolve(OUTPUT_PATH, `${componentName}.md`), md);
    console.log(`Generated: ${componentName}.md`);
  }
  const duration = (Date.now() - startTime) / 1000;
  console.log(`Done in ${duration} seconds.`);
})().catch(e => {
  console.log('ERROR:\n');
  console.log(e);
});
