module.exports = class Installment {
    constructor(valor, quantidade) {
        this.valor = valor
        this.quantidadeDeParcelas = quantidade
        this.situacao = 'pendente'
    }

    mudarSituacao() {
        if(this.situacao === 'pendente') {
            this.situacao = 'paga'
        } else {
            this.situacao = 'pendente'
        }
    }
}
