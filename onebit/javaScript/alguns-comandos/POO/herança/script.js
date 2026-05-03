// herança e um recurso que permite criar classes que incluem, ou "herdam" todos os atributos e metodos de um outra classe

class Propriedade {
    constructor(area, preço) {
        this.area = area
        this.preço = preço
    }

    valorPorMetro() {
        return this.preço / this.area
    }
}

// isso e para fala para o javascript que a classe "casa" e filho da classe "propriedade"
class Casa extends Propriedade {  }

const property = new Propriedade(120, 10000)
const gabrielHouse = new Casa(200, 50000)

console.log(property)
console.log(gabrielHouse)
console.log(gabrielHouse.valorPorMetro())

class apartamento extends Propriedade {
    constructor(number, area, preço) {
        // o super a para voce poder chamar a class pai, se nao usar precisa usar o "this..."
        // se eu usar o super.exemplo() eu nao preciso escrever o metodo denovo
        super(area, preço)
        this.number = number
    }
}

const gabrielaApt = new apartamento(30, 200, 90000)
console.log(gabrielaApt)
console.log(gabrielaApt.valorPorMetro())