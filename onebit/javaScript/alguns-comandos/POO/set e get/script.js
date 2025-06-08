// com o acessador "get" podemos modificar a forma como uma propriedade e lida
// com o acessador "set" podemos modificar a forma que uma propriedade e alterada via atribuiçao
// get para mostar e set para mudar

class Wallet {
    #amount
    #username
    constructor() {
        this.#amount = 100.99 * 100 
    }

    get mostrar() {
        return this.#amount / 100
    }
    // o paremetro e obrigatorio no set
    // o paremetro seria para setar o novo valor
    // Ex: myWallet.newUsername = 'gabriel'
    set newUsername(username) {
        if(typeof username === 'string') {
            this.#username = username
        } else {
            console.log('erro')
        }
    }

    get newUsername() {
        return this.#username
    }
}

// eu posso usar o setter e o getter com o mesmo nome do metodo pois um muda o valor e outro mostra na tela

const myWallet = new Wallet()

console.log(myWallet.mostrar)
myWallet.newUsername = 'gabriel'
console.log(myWallet.newUsername)