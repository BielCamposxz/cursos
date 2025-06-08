// tratamento de erros com try, catch e finally
// no "throw" todo o resto do codigo para de excutar no try, catch e finally e diferendte
// try: executa o bloco de codigo do try
// catch: e se casso acontca um erro o bloca de codigo do try o catch e executado
// finally: o finally ele sempre e executado dps do try e meio que um bloco de codigo garantido a ser executado
// se der erro dentro do try o resto do codigo continua sendo executado

function sum(a, b) {
    const num1 = Number(a)
    const num2 = Number(b)

    if(isNaN(num1) || isNaN(num2)) {
        // se eu colocar o erro dentro de uma variavel eu posso escolher quando eu lancar o erro 
        // ex: const err = new Error('teste')
        throw new Error('deu merda no bagulho')
    }
    
    return num1 + num2
}

// ele tenta executar oque esta dentro do try e se der um erro executa oque esta dentro do catch
// isso e meio que um plano b para que se acontcer um erro o sistema faça outra coisa
// se nao der nenhum erro o try nem o catch e executado mas o finally sim
try {
    console.log(sum(2, 9))
    console.log(sum(undefined, 22))
    console.log(sum(true, 14)) // o js trasforma o true para 1, e o false para 0
    console.log(sum(18, '0'))
    console.log(sum(39, null))
    // console.log(sum(13, 'zero'))
}
// o valor esse parametro e o erro que aconteceu que eu coloquei no "throw" mas o codigo nao para de ser execuado ele continua oque esta em baixo
 catch(error) {
    console.log('deu erro')
    // esse message mostra so o nome do erro que coloquei no throw
    console.log(error.message)
    console.log(error)
} finally {
    console.log('calculo finalizado')
}

console.log('ola, mundo')