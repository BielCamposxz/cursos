// ele e um jeito de voce usar as chaves de uma instancia apenas dentro da classe
// para que ninguem possa mudar essa chave fora da classe
// isso serve para que vc proteja a classe, para que vc nao mude por engano
class Pessoa {
    #nome
    // e possivel atribuitr um valor padrao e se um valor padrao for criado nao e precisa criar ele dentro do contstructor
    #idade = 15
    constructor(nome, idade) {
        this.#nome = nome
    }

    mostarinf() {
        return `${this.#nome} ${this.#idade}`
    }
}


const newPessoa = new Pessoa('gabriel', 12)

console.log(newPessoa)

class Logar {
    #password
    #balance
    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    mostarsaldo(email, senha) {
        if(this.#atenticar(email, senha)) {
            return this.#balance
        } else {
            console.log('informaçoes invalidas')
        }
    }

    #atenticar(email, senha) {
        return this.email === email && this.#password === senha
    }
}

const user = {
    email: 'gabriel@gmail.com',
    password: '123456'
}

const myAccount = new Logar(user)

console.log(myAccount)
console.log(myAccount.mostarsaldo(user.email, user.password))
