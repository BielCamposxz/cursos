class Product {
    constructor(name, description, price) {
        this.nome = name
        this.descricao = description
        this.preco = price
        this.emEstoque = 0
    }

    addToStock(novoNum) {
        this.emEstoque += novoNum
    }
    calcularDisconto(valorDesconto) {
        const desconto = this.preco * (valorDesconto / 100);
        this.preco = this.preco - desconto
    }
    
}
function infoProduct() {
    const name = prompt('digite o nome do produto')
    const descricao = prompt('digite a descricao do produto')
    const preco = parseInt(prompt('digite o preco do produto'))
    const produto = new Product(name, descricao, preco)
    const estoqueNum = parseInt(prompt('quantos em estoque? '))
    produto.addToStock(estoqueNum)
    const addDiscont = confirm('adicionar desconto? ')
    if(addDiscont) {
        const desconto = parseInt(prompt('valor do disconto'))
        produto.calcularDisconto(desconto)
        alert(`foi adicionado ${produto.emEstoque} ${produto.nome} com a descricao ${produto.descricao} com o valor de ${produto.preco}`)
    }
    console.log(produto)
}
export { infoProduct }
export { Product }