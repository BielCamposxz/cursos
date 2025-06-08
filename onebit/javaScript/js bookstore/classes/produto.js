module.exports = class Produto {
    constructor(name, descricao, price, inStock = 0) {
        this.name = name
        this.descriçao = descricao
        this.price = price
        this.inStock = inStock
    }

    addToStock(quantidade) {
        return this.inStock += quantidade
    }

    removeFromStock(quantidade) {
        return this.inStock -= quantidade
    }
}