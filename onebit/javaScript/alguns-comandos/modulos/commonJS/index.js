// modulos servem para vc poder saparar cada funcionalidade do seu codigo em diferentes arquivos
const render = require('./render')
const store = require('./guardar')
console.log('iniciando')
store()
render()

