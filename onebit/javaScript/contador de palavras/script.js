class Text {
    #arry = []
    constructor(text) {
        this.text = text
    }

    separar() {
        return this.text.split(' ')
    }
    #contar() {
        return this.separar().length
    }
    mostrar() {
        return console.log(this.#contar())
    }
}

const oi = new Text('oi, meu nome e gabriel')
oi.mostrar()