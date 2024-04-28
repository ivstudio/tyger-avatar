const propTypesTemplate = (
	{ imports, interfaces, componentName, props, jsx, exports },
	{ tpl }
) => {
	return tpl`${imports}
  ${interfaces}
  function ${componentName}(${props}) {
	return ${jsx};
  }
  
  ${exports}
	`;
};

module.exports = propTypesTemplate;
