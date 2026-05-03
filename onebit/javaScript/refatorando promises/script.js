async function calcularIMC(peso, altura) {
    if(typeof peso !== "number" || typeof altura !== "number") {
        return Promise.reject('os valore nao sao um numero')
    } else {
        const conta = peso / (altura * altura)
        return conta.toFixed(1)
    }
}

async function mostrarSituacao(peso, altura) {
    try {
        const seuImc = await calcularIMC(peso, altura)
        console.log(`seu imc e ${seuImc}`)
            if(seuImc < 18.5) {
                return 'voce esta magro'
            } else if(seuImc < 24.9) {
                return 'voce esta normal'
            } else if(seuImc < 29.9) {
                return 'voce esta acima do peso'
            } else if(seuImc < 39.9) {
                return 'voce esta obeso'
            } else {
                return '!!!obesidade grave'
            }
    }
    catch(err) {
        console.log(err)
    }

}


mostrarSituacao(54, 1.72).then(item => {
    console.log(item)
    console.log('vendo assincronismo')
}).catch(err => {
    console.log(err)
})

console.log('89i')
