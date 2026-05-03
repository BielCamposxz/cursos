const person = {
    nome: 'luke',
    job: 'farmer',
    parents: ['ana', 'padme']
}
// pega as duas propriedades do obj
const {job, parents} = person
console.log(job, parents)

// faz a mesma coisa que o codigo de cima mas com o nome
const nome = person.nome
console.log(nome)

// agora com arry
// pega na ORDEM do arry
// pega os dois parentes do obj
const [father, mother] = parents


function create({name,job,parents}) {
    // floor aredonda o numero para baixo
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = create(person)