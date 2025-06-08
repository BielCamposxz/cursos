function ola() {
    console.log("ola, mundo");
}

// chama a funcao
ola();

// parametro de uma funcao
function dobro(x) {
    console.log(`o dobro de ${x} e ${x * 2}`);
}

dobro(5);
dobro(7);

// o valor de inicio e "mundo"
function dizer(nome = "mundo") {
    console.log(`ola ${nome}`);
}   
// se nao passar nenhum paremetro vai aparecer "mundo"
dizer();

function soma(a, b) {
    console.log(a + b);
}

soma(7, 9);

function criarusuario(nome, senha, email, tipo = "adm") {
    const usuario = { nome, senha, email, tipo };
    console.log(usuario);
}
// parametro padroes sempre tem que ficar no fim para evitar erros
function novo(nome, tipo = "adm", email, senha) {
    const usuario = { nome, email, senha, tipo };
    console.log(usuario);
}

criarusuario("isaac", "1234", "gabriel@gmail.com");
novo("isaac", "1234", "gabriel@gmail.com");

// retorno de funcoes
function calcularMedia(a, b) {
    const media = (a + b) / 2;
    return media
}

const resultado = calcularMedia(5, 10);
console.log(resultado)

// 
function criar(nome, preco) {
    const produto = {nome, preco, estoque: 1}
    return produto
}

const cll =  criar('asus', '2000', '3')
console.log(cll)

function area(base, altura) {
    return area = base * altura
}



console.log(area(3, 5))

function olamundo() {
    let texto = '...'
    return texto
    texto = 'ola mundo'
}

console.log(olamundo())

function maior(idade) {
    if (idade > 18) {
        return 'maior de idade'
    }
    else {
        return 'menor de idade'
    }
}

console.log(maior(13))
console.log(maior(20))

// funcoes anonimas
function mais(a, b) {
    return a + b
}
const operacao = mais

console.log(operacao(4,5))

const subtrair = function (a, b) {
    return a - b
}

console.log(subtrair(2, 4))


let mul = function(a, b) {
    return a * b
}
console.log(mul(10, 10))

mul = function(a,b) {
    return a / b
}
console.log(mul(10, 10))

// high-order functions
function calcular(a, b, opera) {
    console.log('realizando uma operacao')
    const res = opera(a, b)
    return res
}

function so(x, y) {
    console.log('realizar um soma')
    return x + y
}

calcular(3,5, soma)

// arrow function

const arrow = (a, b) => {
    return a + b 
}
console.log(arrow(10,5))

const menos = (a, b) => a - b
console.log(menos(10,5))

const doble = a => a * 2
console.log(doble(10))

const arry = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
const start = arry.filter(item => item[0] === 'P')
console.log(start)
