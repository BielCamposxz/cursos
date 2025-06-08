// uma associaçao e um relacionamento entre classes que permite que uma instancia de uma classe faça a outra realizar uma açao
// e como dizer para a aplicaçao que um objeto de um tipo esta conectado, ou depende de um objeto de outro tipo

class Address {
    constructor(street, number, visinhos, city, state) {
        this.street = street
        this.number = number
        this.visinhos = visinhos
        this.city = city
        this.state = state
    }

    fullAddress() {
        return `rua ${this.street}, n° ${this.number}, bairro ${this.visinhos}, cidade ${this.city}, estado ${this.state}`
    }
}

class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }
}

const addr = new Address('7 de setembro', 99, 'centro', 'cachoeiro', 'ES')
const john = new Person('jonh', addr)
console.log(john)
console.log(john.address.fullAddress())