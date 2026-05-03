const Deposit = require("./deposit");

module.exports =  class Trasfer extends Deposit{
    constructor(usuarioReceber, valor, dataDeCriacao = new Date()) {
        super(valor, dataDeCriacao)
        this.usuarioReceber = usuarioReceber
    }
}