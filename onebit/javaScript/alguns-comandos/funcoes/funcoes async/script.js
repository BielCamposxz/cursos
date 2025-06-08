// isso e uma das forma mais facil de usar as promises no javascript 

// esse "async" fala para o javascript que a funcao vai retornar um promise
// assim fica bem mais simples
async function asyncSum(a, b) {
    // se vc usar o return o js entende que ele e o resolve 
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('os valores nao sao numeros')
    }
    return a + b
}

function asyncSubtract(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('os valores nao sao um numero')
    }
    return a - b
}

const subResult = asyncSubtract(50, 33)
const sumResult = asyncSum(50, 33)

Promise.all([subResult, sumResult]).then((result) => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

// como rejeitar as promises nas funcoes async

const num = [4, 9, 5, 13, 77]

async function asynSquare(x) {
    if(typeof x !== 'number') {
        // para voce poder rejeitar async uma funcao voce tem que usar o "Promise.reject" tudo isso direto no return
        return Promise.reject('o valor nao e um numero')
    }
    return x * x
}

Promise.all(num.map(number => asynSquare(number))).then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
})

// await
// ele e usado junto com as funcoes async para deixar o uso das promises ainda mais facies de usar
// o await so funciona dentro de funcoes async

async function soma(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('os valores nao sao um numero')
    } 
    return a + b
}

async function executar() {
    soma(50, 33).then(resultado => {
        console.log(resultado)
    })
}

async function execute() {
    // o await usado junto com o async serve para esperar a funcao ser finalizada
    // isso serve para nao ficar endentado o codigo e ficando confuso
    // no await trava a execusao do codigo DENTRO DA FUNCAO
    // ele vira um codigo sincrono dentro na funcao
    // ele vai ficar esperando na linha ate o codigo  da funcao concluir

    // para lidar com erro no await e so usar o try catch
    try {
        const resultado = await soma(50, 33)
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

// promise.all com async e await
async function waitFor(segunds) {
    return setTimeout(() => {
        return Promise.resolve()
    }, segunds * 1000)
}

const numbers = [4, 9, 5, 13, 77]

const squares = numbers.map(async items => {
    await waitFor(2)
    return items * items
})

console.log(squares)

Promise.all(squares).then(resultado => {
    console.log(resultado)
})

async function executarConta() {
    const squares =await Promise.all(numbers.map(async items => {
        await waitFor(2)
        return items * items
    }))
    
    console.log(squares)
}

executarConta()
execute()
executar()
