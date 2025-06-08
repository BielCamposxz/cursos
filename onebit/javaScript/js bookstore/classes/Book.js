const Produto = require("./produto");

module.exports = class Book extends Produto {
    constructor(title, synopsis, genere, pages, author, descricao,price, inStock = 0) {
        super(`livro: ${title}`, descricao, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genere = genere
        this.pages = pages
        this.author = author
    }
}