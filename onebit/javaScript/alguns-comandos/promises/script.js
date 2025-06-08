// as promises e um objeto com uma funcao que e execuatado de forma assincrona
// a promises e executada no momento que e criada
// ela geralmente e usada para pegar dados de um servidor ou nuvem sem travar a resto da execucao do codigo enquanto as requisicoes sao feitas na promise o codigo continua executando normalmente
// se a promise for rejeitada o resto do codigo que for executado depois da promise for executada para por exemplos timeout, setinterval

// estado pendete = quando criada
// estado de resolvida = foi executada e teve sucesso
// estado rejeitado = uma que foi executada mas deu erro
// a promise resolvido ou rejeitado conta como um promisse que foi finalizada
// essa funcao e obrigatoria
const p = new Promise((resolve, rejeitado) => {
    console.log('a promisse esta sendo executada')
    setTimeout(() => {
        if(true) {
            // causa um erro ai ela fica rejeiatada
            // rejeitado(false)
        }
        // execeutar e encerrar a promise
        // se nao usar isso ele continua com pendente
        // o valor dentro do () vai ser o valor retornado quando finalizada
        console.log('resolvendo a promise')
        resolve(true)
    }, 1000 * 2)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 3)

console.log('-------------------------------')

function execeutar() {
    // faz alguma coisa
    return new Promise((resolve, rejeitado) => {
        console.log('a promise esta sendo executada')
        setTimeout(() => {
            if(false) {
                rejeitado('a promise foi rejeitada')
            } else {
                console.log('resolvendo a promise')
                resolve('resultado')
            }
        }, 2000);
    })
}

// para lidar quando a promise e resolvida
// o paremetro e o valor retornado no resolve
// o then para retorna a promise para poder encadidar
// o then, catch e finally so e executados quando a promise for completamente finalizada
// o melhor jeito de usar e encadidar ela direto na chamada da funcao
execeutar().then((resultado) => {
    console.log(resultado)
    // para quando da erro na promise quando ela e rejeitada
    // usando o catch o resto do codigo continua a ser executado caso eu rejeite a promise
}).catch((erro) => {
    console.log(erro)
    // o mesmo do try ela sempre e executada e nao tem paremetros
}).finally(() => {
    console.log('a promise foi finalizada')
})

// encadeando as promises
// que isso serve para executar varias promises em sequencia


function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

getAge('2009-09-02').then(age => {
    return checkAge(age)
}).then((tem18) => {
    if(tem18) {
        console.log('ele e maior de idade')
    } else {
        console.log('ele e menor de idade')
    }
})

// executando varias promises que o resultado de uma depende do resultado da outa

function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33)
const subResult = asyncSubtract(50, 33)

// esse result vai ser um arry que retorna os dois valores das duas promises
// isso retorna um arry com os valores das promises e tambem retorna outra nova promise
// o promise.all e para trasformar varias promises em uma so
// ele juntas todas as promises entao se um for rejeitada todas nao sao executadas
Promise.all([subResult, sumResult]).then((result) => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

const num = [4, 9, 5, 13, 77]

function asynSquare(x) {
    return new Promise((resolve, rejeiatada) => {
        if(typeof x !== 'number') {
            rejeiatada(false)
        } else {
            resolve(x * x)
        }
    })
}

// se der um erro em qualquer posicao do arry tudo da erro
Promise.all(num.map(number => asynSquare(number))).then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
})