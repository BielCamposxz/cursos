// se colocar '...' antes de uma string separa ela
// trasforma um string em um arry
const ola = 'ola, mundo'
const arry = [...ola]
console.log(arry)

// clona o obj
const obj = {nome: 'gabriel', idade: 23}
const objClonado = {...obj}
console.log(objClonado)
console.log(obj)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(...towns)

const cidades = towns
cidades.pop()
cidades.pop()
cidades.push('juno')

const cidadesClone = [...towns]

const obj2 = {...towns}

// parametros rest com spread
// isso me permite passar varios paremtros na funcao
// e se for trabalhar com isso sem deixe os rest sendo o ultimo parametro
// trasforma todos os paremetros em um arry
function soma(...number) {
    console.log(number)
    return number.reduce((ac, num) => ac + num, 0)
}

console.log(soma(2, 2,))
console.log(soma(2, 2, 2, 2, 2))
console.log(45, 3, 10, 28)
