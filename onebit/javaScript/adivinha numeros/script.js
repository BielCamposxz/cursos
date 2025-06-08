const randomNum = Math.random()
const num = randomNum * 11
const int = Math.trunc(num)
let numEscolhido = 0


do {
    numEscolhido = parseInt(prompt('escolha um numero de 0 a 10'))
    if(int > numEscolhido) {
        alert('o numero e maior')
    }
    if(int < numEscolhido) {
        alert('o numero e menor')
    }
    if(numEscolhido === int) {
        alert('voce acertou')
    }
} while (numEscolhido !== int);