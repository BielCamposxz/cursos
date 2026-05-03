
let  fila = []
let opicao = ''

do {
    let paciente = ''
    for(let i = 0; i < fila.length; i++) {
        paciente += (i + 1) + '°' + fila[i]  + '\n'
    }
    opicao = prompt(`pacientes em espera:\n ${paciente} \n escolha uma acao\n1. adicionar paciente \n 2. consultar paciente \n 3. sair`)


    switch (opicao) {
        case '1':
            let pacienteAdicionado = prompt('nome do pacinete adicionado')
            fila.push(pacienteAdicionado)
            break
            case '2':
                let pacienteConsultado = fila.shift()
                if (pacienteConsultado !== undefined) {
                    alert(`o paciente ${pacienteConsultado} foi para consulta`)
                }
                else {
                    alert('nao tem ninguem na fila')
                }
                break
                case '3':
                    alert('saindo...')
                    break
            default:
                alert('opicao invalida')
    }
} while (opicao != '3');