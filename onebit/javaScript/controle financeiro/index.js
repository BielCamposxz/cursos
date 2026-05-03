let dinhero = parseInt(prompt('Quantos reais voce tem? '))
let opicoes = ''
let historico = []

do {
    let histo = ''
    for (let index = 0; index < historico.length; index++) {
        histo += `${historico[index]} \n`
    }
    opicoes = prompt(` voce tem ${dinhero} voce deseja? \n 1. adicionar\n 2. retirar \n 3. historico \n 4. sair`)

    switch (opicoes) {
        case '1' :
        let dinheroAdicionado = parseInt(prompt('quantos reais voce deseja adicionar'))
        dinhero += dinheroAdicionado
        historico.push(dinheroAdicionado)
        break
        case '2':
            let dinheroRetirado = prompt('quantos reais voce deseja retirar')
            dinhero -= dinheroRetirado
            historico.push("-" + dinheroRetirado)
            break
            case '3':
                alert(histo)
                break
                case '4':
                alert('saindo...')
                break
                default:
                    alert('valor invalido')
    }
} while (opicoes != '3');