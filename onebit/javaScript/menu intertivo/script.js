let menu = prompt('inicio \n inscricoes \n perfil \n menu \n encerrar')

do {

switch (menu) {
    case 'inicio':
        alert('voce clicou no inicio')
        break
    case 'inscricoes':
    alert('voce clicou em inscricoes')
        break
    case 'perfil':
        alert('voce clicou em perfil')
        break
    case 'menu':
        alert('voce clicou em menu')
        break
    default:
        alert('opicoes escritas de forma incorreta')

}
menu = prompt('inicio \n inscricoes \n perfil \n menu \n encerrar')
} while(menu != 'encerrar')

alert('voce escolheu encerrar ')
alert('encerrando...')