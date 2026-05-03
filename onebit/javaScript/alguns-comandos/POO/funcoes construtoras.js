// funcaoes construtoras
// sao funcaoes para criar objetos
// ultilizar letra maiuscula para um codigo mais organizado

function Book(title, paginas, tags, author) {
    this.title = title
    this.paginas = paginas
    this.tags = tags
    this.author = author
    this.public = false
    this.stock = 0
    this.addstock = function (quatidade) {
        this.stock += quatidade
    }
    this.save = function () {

    }
}

const author = { name: 'gabriel'}
const tags = ['fanatasia', 'terro']
// o "new" e usado para chamar as funcaoes contrutoras
const eragon = new Book('eragon', 200, tags, author)
console.log(eragon)

// isso permite eu criar varios objetos mudando os valores
const lupin = new Book('lupin', 150, tags, author)

function Jogos(nome, avaliacao, foiZerado, tags, author) {
    this.nome = nome
    this.avaliacao = avaliacao
    this.foiZerado = foiZerado
    this.tags = tags
    this.author = author
    this.mudarAvaliacao = (nova) => {
        this.avaliacao = nova
    }
}

const hollow = new Jogos('hollow knite', 10, true, tags, author)
console.log(hollow)

const gta = new Jogos('gta 5', 7, true, tags, author)
console.log(gta)

function Filmes(nome, geral, ano, tags, author) {
    this.nome = nome
    this.geral = geral
    this.ano = ano
    this.tags = tags
    this.author = author
    this.mudarNota = (nova) => {
        this.geral = nova
    }
}

const seven = new Filmes('seven', 9, 2007, tags, author)

console.log(seven)

const zodiac = new Filmes('zodiac', 10, 2005, tags, author)
console.log(zodiac)
