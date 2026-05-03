import { criarTr } from "./criarTr.js";
import { criarTrComImg } from "./criarTrComImg.js";
import { mudarCorDaCasa } from "../../mudarCorDaCasa.js";

async function requisicao() {
    const resposta = await fetch('https://hp-api.onrender.com/api/characters').then(res => res.json())
    console.log(resposta)

    resposta.forEach(personagem => {
        mostrarNaTela(personagem)
    });
}

function mostrarNaTela(data) {
    const card = document.createElement('div')
    card.classList.add('card')
    
    const img = document.createElement('img')
    img.src = data.image
    
    const table = document.createElement('table')

    const name = document.createElement('td')
    name.textContent = data.name
    name.classList.add('name')
    
    const hogwartsStudent= criarTrComImg(data.hogwartsStudent, 'hogwarts Student', 'https://img.icons8.com/color/48/checkmark--v1.png', 'https://img.icons8.com/color/48/delete-sign--v1.png', true)
    const hogwartsStaff = criarTrComImg(data.hogwartsStaff, 'hogwarts Staff', 'https://img.icons8.com/color/48/checkmark--v1.png', 'https://img.icons8.com/color/48/delete-sign--v1.png', true)
    const dateOfBirth = criarTr(data.dateOfBirth, 'date Of Birth')
    const patronus = criarTr(data.patronus, 'patronus')
    const gender = criarTrComImg(data.gender ,'gender', 'https://img.icons8.com/color/48/male.png',  'https://img.icons8.com/color/48/female.png', 'male')
    const species = criarTr(data.species, 'species')
    const house = criarTr(data.house, 'house')
    const wizard = criarTr(data.wizard, 'wizard')    
    const actor = criarTr(data.actor, 'actor')
    const ancestry = criarTr(data.ancestry, 'ancestry')

    table.append(species, gender, house, wizard, actor, ancestry, patronus, dateOfBirth, hogwartsStudent, hogwartsStaff)
    card.append(name, img, table)
    document.querySelector('main').appendChild(card)

    mudarCorDaCasa()
}

requisicao()