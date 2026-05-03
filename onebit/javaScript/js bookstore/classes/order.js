module.exports = class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.forEach(({product, quantidade}) => {
            if(quantidade > product.inStock) {
                throw new Error('deu ruim')
            }
        });
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, {product, quantidade}) => sum + (product.price * quantidade, 0))
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}