const Author = require('./author.js')

const jonh = new Author('jonh')

const post = jonh.mostar('titulo', 'qualquer coisa')

post.addComent('gabriel', 'muito bom')
post.addComent('felipe', 'muito ruim')

console.log(jonh)
console.log(post)