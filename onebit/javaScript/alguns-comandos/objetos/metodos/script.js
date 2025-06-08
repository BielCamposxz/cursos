// funcao dentro de objeto = metodo
let pessoa = {
    nome: 'felipe',
    idade: 23,
    dizerOla() {
        // mostra oque esta no objeto
        console.log('ola, mundo meu minha idade e ' + this.idade)
    }
}

pessoa.dizerOla()

console.log(pessoa)