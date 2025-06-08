function calcular(a, b, operacao) {
    console.log()
    const resutado = operacao(a, b)
    return resutado
}

function somar(x, y) {
    console.log()
    return x + y
}

console.log(calcular(3, 5, somar))

calcular(8, 4, function (x, y) {
    return x - y
})

function exibir(elemeto,indice, arr) {
    console.log(elemeto, indice, arr)
}


const lista = ['maca', 'banana', 'laranja', 'limao']

for (let index = 0; index < lista.length; index++) {
    exibir(lista[index], index, lista)
}

// faz uma funcao para cada elemento array
// forEach = para cada elemento do arr
lista.forEach(exibir)

lista.forEach(function (elemento,indice, arr) {
    console.log(elemento,indice,arr)
})

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
    ]

// map
// transformar arr pega um exitente e cria em outro arr
const nomes = []
for(let i =0;i < personagens.length;i++) {
    nomes.push(personagens[i].nome)
}

console.log(nomes)

const nome = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomes)

// filter 
// seleciona elementos epecificos e joga em outro array

const orcs = []

for (let i = 0; i < personagens.length; i++) {
    if(personagens[i].raca === 'Orc') {
        orcs.push(personagens[i])
    }
}

console.log(orcs)

const orc = personagens.filter(function (personagem) {
    return personagem.raca === 'Orc'
})

console.log(orc)

// reduce
// trasforma um array em outra coisa

const nivel = personagens.reduce(function (valor, personagem) {
    return valor + personagem.nivel
}, 0)

console.log(nivel)

const racas = personagens.reduce(function (valor, personagem) {
    if(valor[personagem.raca]) {
        valor[personagem.raca].push(personagem)
    }
    else {
        valor[personagem.raca] = [personagem]
    }

    return valor
}, {})

console.log(racas)

const pessoas = [
    {nome: 'gabriel', idade: 25, salario: 2500, ativo: true, bonus: 0},
    {nome: 'felipe', idade: 30, salario: 0, ativo: true, bonus: 0},
    {nome: 'paulo', idade: 33, salario: 6000, ativo: true, bonus: 0},
    {nome: 'maria', idade: 23, salario: 4500, ativo: false, bonus: 0},
    {nome: 'arhur', idade: 19, salario: 1700, ativo: true, bonus: 0}
]

// muda a ordem o primeiro item vira o ultimo
// console.log(pessoas.reverse())

// find
// mostra o primeiro item da condicao que eu colocar
const trintaAnos = pessoas.find((user) => user.idade >= 30)
console.log(trintaAnos)

// findindex
// mostra o primeiro index do item que eu pedir na condicao
const isactive = pessoas.findIndex((user) => user.ativo === false)
console.log(isactive)

// some
// verifica se pelo menos um item tem a condicao que eu pedi
const falso = pessoas.some((user) => user.ativo === false)
console.log(falso)

// every
// para retormar true todos os item tem que ter a condicao que colocar
const bonus = pessoas.every((user) => user.bonus === 0)
console.log(bonus)

// filter
const ativos = pessoas.filter((user) => user.ativo === true)
console.log(ativos)

// reduce
const somarSalario = pessoas.reduce((total,user) => user.salario += total, 0)
console.log(somarSalario)

// map 
const map = pessoas.map((user) =>{
    if(user.salario < 2000 && user.ativo === true) {
        user.salario += 400
        user.bonus++
    }
    return{
        nome: user.nome,
        salario: user.salario,
        bonus: user.bonus

    }
})
console.log(map)

// sort
// ordena na ordem alfabeta crescete
console.log(pessoas.sort())
// ordena na ordem alfabeta decrescete
console.log(pessoas.sort().reverse())

// numeros
// ordena os numeros de forma crescente
console.log(pessoas.sort((a, b) => a - b))
// ordena os numeros de forma decrescente
console.log(pessoas.sort((a, b) => b - a))