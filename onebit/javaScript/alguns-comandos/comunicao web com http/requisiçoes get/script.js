async function getCountries() {
    // o fetch e usada para fazer requisicoes http
    const resposta = await fetch('https://restcountries.com/v3.1/all')
    // isso converte a requisao para um formato que o js entende
    // isso retorna uma promise
    const paises = await resposta.json()

    paises.forEach(pais => {
        mostrarNaTela(pais)
    });

}

function mostrarNaTela(pais) {
    const card = document.createElement('div')
    card.classList.add('country')

    const nomeDoPais = pais.name.common
    const h2 = document.createElement('h2')
    h2.textContent = nomeDoPais

    const flag = document.createElement('img')
    flag.src = pais.flags.svg

    card.append(h2, flag)
    document.querySelector('main').append(card)
}

getCountries()