// settimeout: e como um temperizador, ele espera um determinado tempo para executar um funcao/bloco de codigo

console.log('programa iniciado')

// se colocar dentro de uma variavel ele vira meio que um indentificador do timeout
// podendo ser usada para parar o timeout
const setTimeoutId = setTimeout(() => {
    console.log('3 segundo se passarao desde que o programa foi iniciado')
    // e possivel realizar calculos para determinar o tempo assim fica mais legivel
}, 1000 * 3)

clearTimeout(setTimeoutId)

// setinterval: o set interval ele chama o codigo infinitas vezes diferente do settimeout que so chama um vez no tempo determinado

let segundo = 0

const setIntervalId = setInterval(() => {
    segundo += 3
    console.log(segundo)
    if(segundo > 10) {
        clearInterval(setIntervalId)
    }
}, 1000 * 3)
