let opicoes = ''
let totalCartas = 0 
let cartas = []


do {
    opicoes = prompt(`voce tem ${totalCartas} no baralho e elas sao: \n ${cartas} \n 1. adicionar carta \n 2. puxar carta \n 3. sair`)

    switch (opicoes) {

        case '1':
            let cartaAdicionada = prompt('nome da carta adicionada')
            let carta = `${cartaAdicionada} \n`
            cartas.push(carta)
            totalCartas++
        break

        case '2':
            let cartaRetirada = cartas.pop()

        if (cartaRetirada !== undefined) {
            alert('a carta retirada foi \n' + cartaRetirada)
            totalCartas--
            
        } else {
            alert('nao tem carta na messa')
        }
            break

        case '3':
            alert('saindo...')
            break

        default:
            alert('opicao invalida')

    }
} while (opicoes != '3');