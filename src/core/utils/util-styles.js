const sharedVariables = require('sass-extract-loader!../../containers/App/styles/variables.scss')

export function getStyles(key) {
  const variables =  sharedVariables.global

  if (key instanceof Array) {
    const stylesArr = []

    for (let i = 0; i < key.length; i++) {
      const styleKey = key[i]

      if (variables[styleKey] && variables[styleKey].declarations.length) {
        const style = variables[styleKey].declarations[0].expression
        stylesArr.push(style)
      }
    }

    return stylesArr
  } else if ((typeof key === 'string') && variables[key]) {
    return variables[key].declarations[0].expression
  }
}
