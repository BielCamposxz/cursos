const Comment = require('./comment.js')

class Post {
    constructor(title, conteudo, author) {
        this.title = title
        this.conteudo = conteudo
        this.author = author
        this.comentarios = []
    }
    addComent(user,coment) {
        this.comentarios.push(new Comment(user, coment))
    }
}

module.exports = Post

