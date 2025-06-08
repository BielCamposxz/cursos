const a = 0

const b = null

const c = 'text'
// o "0" em javascript quando e usado com um operador logico ele a considerado falso/undefined

// o "??" verifica se o valor e null ou undefined e se for passa para o proximo
// verifica se tem algum conteudo mesmo se for "false" o operador "??" so passa para o proximo se for null ou undefined
console.log(a ?? b ?? c)

let aa = 0

let bb = aa || 42
console.log(bb)
bb = aa ?? 42

console.log(bb)



