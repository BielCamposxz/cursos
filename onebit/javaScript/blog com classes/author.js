const Post = require('./post.js') 

class Author {
    constructor(author) {
        this.author = author
        this.posts = []
    }

    mostar(title, conteudo) {
        const post = new Post(title, conteudo, this.author)
        this.posts.push(post)
        return post
    }
}

module.exports = Author