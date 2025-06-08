let opicoes = ''
let imoveis = []

do {
    opicoes = prompt(`quantidades de imoves: ${imoveis.length} \n 1. salvar imovel \n 2. imoveis cadrastrados \n 3. sair`)
    switch (opicoes) {
        case '1':
        let objeto = {}
        objeto.nome = prompt('nome do proprietario')
        objeto.quartos = prompt('quantidade de quartos')
        objeto.banheiro = prompt('quantidade de banheiros')
        objeto.garagem = prompt('possou garagem?')
        imoveis.push(objeto)
        break
        case '2':
       for (let i = 0; i < imoveis.length; i++) {
        alert(`imovel: ${(i + 1)} \n nome : ${imoveis[i].nome} \n quartos: ${imoveis[i].quartos} \n banheiros: ${imoveis[i].banheiro} \n garagem: ${imoveis[i].garagem}`)
       }
       break
       case '3':
        alert('saindo')
        break
        default:
            alert('opicoes invalidas')
    }
} while (opicoes !== '3');