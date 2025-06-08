module.exports = class Acconut {
    #saldo
    constructor(saldo, user) {
        this.#saldo = saldo
        this.user = user
        this.todosDepositos = []
        this.todosEmprestimos = []
        this.todasTrasnferincias = []
    }

    get verSaldo() {
        return this.#saldo
    }

    newDeposit({valor, dataDeCriacao = new Date()}) {
        this.#saldo += valor
        this.todosDepositos.push([valor, dataDeCriacao = new Date()])
    }

    newLoan({valor, dataDeCriacao = new Date(), parcelas}) {
        this.#saldo += valor
        this.todosEmprestimos.push([valor, dataDeCriacao = new Date(), parcelas])
    }

    newTrasferencia({usuarioReceber, valor, dataDeCriacao = new Date()}) {
        if(this.user === usuarioReceber) {
            this.#saldo += valor
        } else {
            this.#saldo -= valor
            this.todasTrasnferincias.push([this.user, usuarioReceber, valor, dataDeCriacao])
            usuarioReceber.almentarSaldo(valor)
        }
    }

    almentarSaldo(valor) {
        this.#saldo += valor
    }

    diminuirSaldo(valor) {
        this.#saldo -= valor
    }
}


