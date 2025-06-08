// como boas praticas e bom voce usar o nome do arquivo com o nome das classes
// para criar basta colocar a palavra reservado "class" e o nomo da obj
class Book {
    constructor(tituloDolivro) {
        // aqui e como um funcao construtora
        this.tituloDolivro = tituloDolivro
        this.public = false
    }
    // para crias um metodo voce nao precisa escrever "this.(nome da funcao)" apena "funcaoTest() {}"
    // tudo isso fora do constructor
    // para chamar tem que escrever nome da instancia e chamar a funcao
    funcaoTest() {
        this.public = true
    }
}



// o eragon seria a instancia da class book
const eragon = new Book('eragon')
eragon.funcaoTest()
console.log(eragon)
// isso verifica se a instaancia "eragon" faz parte da classe "Book"
console.log(eragon instanceof Book)
const lupin = new Book('lupin')
lupin.funcaoTest()
console.log(lupin)

class Filmes {
    constructor(nome, avaliacao) {
        this.nome = nome
        this.avaliacao = avaliacao

    }

    mudarNota(nova) {
        this.avaliacao = nova
    }
}

const seven = new Filmes('Seven', 9)
seven.mudarNota(10)
console.log(seven instanceof Filmes)
console.log(seven)
const zodiac = new Filmes('zodiac', 10)
zodiac.mudarNota(9)
console.log(zodiac)

class Jogos {
    constructor(nome, geral) {
        this.nome = nome
        this.geral = geral
    }

    mudarGeral(novo) {
        this.geral = novo
    }
}

const hollow = new Jogos('hollow knit', 9)
hollow.mudarGeral(10)
console.log(hollow)
console.log(hollow instanceof Jogos)
const gta = new Jogos('gta', 8)
gta.mudarGeral(7)
console.log(gta)

class Series {
    constructor(nome) {
        this.nome = nome
    }
}

const dexter = new Series('dexter')
const prison = new Series('prison')

class Comidas {
    constructor(prato) {
        this.prato = prato
    }
}

const churrasco = new Comidas('churrasco')
const pizza = new Comidas('pizza')

class Cor {
    constructor(colorname) {
        this.color = colorname
    }
}

const azul = new Cor('azul')
const amarelo = new Cor('amarelo')

class Numeros {
    constructor(numero) {
        this.numero = numero
    }
}

const sete = new Numeros(7)
const dois = new Numeros(2)

class test {
    constructor(test,num) {
        this.test = test
        this.num = num
    }

    mudarNum(novoNum) {
        this.num = novoNum
    }
}

class test2 {
    constructor(ex) {
        this.exemplo = ex
    }

    metodoTest(test) {
        this.exemplo = test
    }
}


class sites {
    constructor(texto) {
        this.nomeSite = texto
    }

    mudarTexto(novo) {
        this.nomeSite = novo
    }
}

const one = new sites('onebitcode')
console.log(one instanceof sites)
one.mudarTexto('insta')