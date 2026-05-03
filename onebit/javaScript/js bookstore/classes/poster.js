const Produto = require("./produto");

module.exports = class Poster extends Produto {
    constructor(name, descricao, price,  height, width, inStock = 0) {
        super(name, descricao, price, inStock)
        this.height
        this.width
    }
}