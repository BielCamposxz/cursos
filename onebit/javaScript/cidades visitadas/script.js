const turista = prompt('qual seu nome? ')
let cidades = ""
let contagem = 0

let continuar = confirm('voce ja visitou uma cidade? ')

while (continuar == true) {
    let cidade = prompt('qual o nome da cidade visitada? ')
    cidades += ` - ${cidade} \n`
    contagem++
    continuar = confirm('voce ja visitou alguma outra cidade? ')
}

alert(`o ${turista} visitou ${contagem} cidades e essas cidades foram: \n ${cidades}`)