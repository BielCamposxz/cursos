function calcularIMC(peso, altura) {
    return new Promise((resolve, rejeitado) => {
        if(typeof peso !== "number" || typeof altura !== "number") {
            rejeitado('os valore nao sao um numero')
        } else {
            const conta = peso / (altura * altura)
            resolve(conta.toFixed(1))
        }
    })
}

function mostrarSituacao(peso, altura) {
    calcularIMC(peso, altura).then(resultado => {
        console.log(`seu imc e ${resultado}`)
        if(resultado < 18.5) {
            console.log('voce esta magro')
        } else if(resultado < 24.9) {
            console.log('voce esta normal')
        } else if(resultado < 29.9) {
            console.log('voce esta acima do peso')
        } else if(resultado < 39.9) {
            console.log('voce esta obeso')
        } else {
            console.log('!!!obesidade grave')
        }
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        console.log('promise finalizada')
    })
    console.log('vendo assincronismo')
}

mostrarSituacao(54, 1.72)