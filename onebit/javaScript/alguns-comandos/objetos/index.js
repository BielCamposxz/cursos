let opicoes = ''

do {
    opicoes = prompt('1. log \n 2. warn \n 3. error \n 4. sair')

    switch (opicoes) {
        case "log":
            console[opicoes]('console.log')
            break;
        case 'warn':
            console[opicoes]('console.warn')
            break
            case 'error':
                console[opicoes]('console.error')
                break
                case '4':
                    alert('saindo')
                    break
        default:
            alert('opicao invalida')
            break;
    }
} while (opicoes != '4');

// objetos globais
// Data, Math, Object, Arry etc...
