// revisando obj
const book = {
    title: 'Eragon',
    pages: 465,
    public: true,
    inStock: 20,
    tags: ['fantasy', 'aventura'],
    author: {
        name: 'gabriel'
    },
    // metodos
    // o this se refere ao abj
    addstock(quatity) {
        this.inStock += quatity
    },
  
}


console.log(book.title)

book.addstock(10)

console.log(book.inStock)

book.save = function () {
    
}


// oque e POO?
// e um conjunto da conjuntos e recursos de uma linguagem
// as classes sao como fabricas de objetos a partir de uma forma
// as instancias sao os objetos criados pelas classes
