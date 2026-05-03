const password = 'rRULS&IN5P'
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9' , '0']
const especial = ['!', '@', '$', '%', '&', '*', '(' , ')', '-', '_', '=', '+', '/', '#']

function compararMaiuscula() {
    const arry = password.split('')
    return arry.some(letra => letra === letra.toLocaleUpperCase() && letra !== letra.toLocaleLowerCase());
}

function compararTamanho() {
    const tamanho = password.length
    if(tamanho >= 8) {
        return true
    }
    else {
        return false
    }
}

function compararNumeros() {
    const arry = password.split('')
    return arry.some(letra => num.includes(letra));
}

function compararCaracterEspecial() {
    const arry = password.split('')
    return arry.some(letra => especial.includes(letra));
}

if(compararMaiuscula() === false) {
    console.log('falta letra Maiuscula')
} else {
    if(compararNumeros() === false ) {
        console.log('falta numeros')
    } else if(compararTamanho() === false) {
        console.log('a senha tem que ter mais de 8 caracteres')
    } else if(compararCaracterEspecial() === false) {
        console.log('tem que conter caracteres especiais')
    } else {
        console.log(`sua senha e segura`)
    }
}
