var num = [4, 8, 2, 9]
num.push(10) // vai para o final
num[5] = 1 //escolho onde vai
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro numero e: ${num[0]}`)
console.log(`os numeros no vetor sao: ${num}`)

console.log('------------------------------------')

//falar a posicao e o numero dela
var pos = 0
while (pos < num.length) {
    console.log(`a posicao ${pos} esta o numero ${num[pos]}`)
    pos++
}

console.log('------------------------------------')

//os dois fazem a mesma coisa
for (var pos in num) {
    console.log(`a posicao ${pos} esta o numero ${num[pos]}`)
}

console.log('------------------------------------')

//coloca o valor e fala em qual posicao ele esta
var c = 4
var posi = num.indexOf(c)
if (posi >= 0) {
    console.log(`o numero ${c} esta na posicao ${posi}`)
}
else {
    if (posi == -1) {
        console.log(`o numero ${c} nao existe`)
    }
}


const listaDeCompras = ['acucar', false]
console.log(listaDeCompras)

listaDeCompras[0] = 'arroz'
listaDeCompras[1] = 'feijao'
listaDeCompras[2] = 7
// colocar valores sem precisar ser em ordem e se eu mandar mostrar um valor que nao tem aparece "undefined"
listaDeCompras[5] = 'batata'


console.log(listaDeCompras)


const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// adicionar elementos na ultima posicao
// push

// se colocar uma variavel no comecao mostra o tamanho do arry
let tamanho = arr.push('borromir')
console.log(arr)
console.log(tamanho)

// unshift
// coloca algum elemento na primeira posicao

// se colocar uma varivavel no comecao mostra o tamanho do arry
tamanho = arr.unshift('boromir')
console.log(arr)
console.log(tamanho)

// remover elementos
// pop
// retira o ultimo elemento 
// nao passa nenhum valor no parenteses
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift
// tira o primeiro elemento
// nao passa nenhum valor no parenteses
arr.shift()

// pesquisar por um elemento
// includes
// verifica se tem esse elemento
const inclui = arr.includes("Gandalf")

// indexof
// mostra em qual posicao esta o elemento a baixo e se o elemento existe
const indice = arr.indexOf("Gandalf")
console.log(indice)


// cortar e concatenar
// slice
// copia uma parte do array e salva em outro array

// pega tudo que esta nas casas 0, 1, 2, 3 e o "4" nao conta
const hobbits = arr.slice(0, 4)
// contar ao contrario, quando colocar um "-" comeca e conta do final ate o comecao o "-1" e o ultimo elemento do array
const outros = arr.slice(-4 )
console.log(outros)
console.log(arr)
console.log(hobbits)

// concatenar
// concat
let sociedade = hobbits.concat(outros, "boromir")
console.log(sociedade)

// substituicao dos elementos ou remover
// splice
const a = sociedade.splice(4, 1) 
console.log(sociedade)

// iterar os item
let i = 0
while (i < sociedade.length) {
    const elemento = sociedade[i]
    console.log(`${elemento} se encontra na posicao ${i}`)
    i++
}






