module.exports = class DataBase {
    #storage = {
        author: [],
        books: [],
        posters: [],
        order: [],
        user: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.author.push(author)
    }

    findBook(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const bookExist = this.findBook(book.name)
        if(!bookExist) {
            this.#storage.books.push(book)
        }
    }

    addBook(bookName, quantidade) {
        const book = this.findBook(bookName)
        book?.addToStock(quantidade)
    }

    removeBook(bookName, quantidade) {
        const book = this.findBook(bookName)
        book?.removeFromStock(quantidade)
    }
    
    findPoster(posterName) {
        return this.#storage.posters.find(p => p.name === posterName)
    }

    savePoster(poster) {
        const posterExist = this.findPoster(poster.name)
        if(!posterExist) {
            this.#storage.posters.push(poster)
        }
    }

    addPoster(posterName, quantidade) {
        const poster = this.findPoster(posterName)
        poster?.addToStock(quantidade)
    }

    removePoster(posterName, quantidade) {
        const poster = this.findPoster(posterName)
        poster?.removeFromStock(quantidade)
    }

    saveUser(user) {
        const userExist = this.#storage.user.find(u => u.emal === user.emal)
        if(!userExist) {
            return this.#storage.user.push(user)
        }
    }

    saveOrder(order) {
        return this.#storage.order.push(order)
    }

    showStorage() {
        console.table(this.#storage.author)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.user)
        console.table(this.#storage.order.map(o => o.data))
    }
}