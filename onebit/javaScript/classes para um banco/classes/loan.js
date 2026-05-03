const Deposit = require("./deposit")
const Installment = require("./installment")

module.exports = class Loan extends Deposit{
    static #taxaJuros = 5

    constructor(valor, dataDeCriacao, parcelas) {
        super(valor, dataDeCriacao)
        this.parcelas = new Installment(this.valor, parcelas)
        this.total = ((this.parcelas.valor * Loan.#taxaJuros) + this.parcelas.valor) * this.parcelas.quantidade
    }

    set mudarValorDaTaxa(novoValor) {
        return Loan.#taxaJuros = novoValor / 100
    }
    get lerTaxa() {
        return Loan.#taxaJuros
    }
}



