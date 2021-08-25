function defaultTemplate(
	{ template },
	opts,
	{ imports, interfaces, componentName, props, jsx }
) {
	const tygerIcon = `${componentName.name.replace('Svg', 'Icon')}`;
	const plugins = ['jsx'];
	if (opts.typescript) {
		plugins.push('typescript');
	}
	const typeScriptTpl = template.smart({ plugins });
	return typeScriptTpl.ast`${imports}
  ${interfaces}
  function ${tygerIcon}(${props}) {
    return ${jsx};
  }
  export default ${tygerIcon}
    `;
}
module.exports = defaultTemplate;
