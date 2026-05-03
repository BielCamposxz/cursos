// serve para que os navegadores que nao rodem o javascript moderno consiga entender o que esta sendo escrito
// pega o codigo de ES6 e trasforma em versoes mais antigas

// para fazer uma trasformacao basta ecrever "npx babel (nome do arquivo a ser convertido)" mas essa conversao so faz no terminal
// se eu quiser jogar criar outra pasta com o codigo o comando e esse "npx babel (arquivo do codigo) --out-file (arquivo de saida) --presets=@babel/preset-env"
// e para trasformar um arquivo todo usa "npx babel (nome do arquivo) --out-dir (arquivo de saida) --presets=@babel/preset-env"
let opcao = ''
const media = (...valor) => {
    const string = valor.toString()
    const num = string.split(' ')
    const result = num.map(str => parseInt(str));
    const conta = result.reduce((total, item) => total + item, 0)
    const contaFinal = conta / num.length
    alert('sua media e ' + contaFinal)
}

const mediaPonderada = () => {
    const valores = []
    let numero = parseInt(prompt('digite o valor do numero'))
    let peso = parseInt(prompt('digite o valor do peso'))
    valores.push({n: numero, p: peso})
    let confimar = confirm('deseja adicionar outro valor? ')
    while(confimar) {
        numero = parseInt(prompt('digite o valor do numero'))
        peso = parseInt(prompt('digite o valor do peso'))
        valores.push({n: numero, p: peso})
        confimar = confirm('deseja adicionar outro valor? ')
    }
    const conta1 = valores.reduce((total, item) => total + (item.n * item.p), 0)
    const conta2 = valores.reduce((total, item) => total + item.p, 0)
    const conta3 = conta1 / conta2
    alert('sua media ponderada e igual a: ' + conta3)
}

const moda = (...numeros) => {
    const arry = []
    const string = numeros.toString()
    const quebrando = string.split(' ')
    const num = quebrando.map(item => parseInt(item))
    const sort = num.sort((a, b) => a - b)
    for(let i = 0;i < sort.length;i++) {
        if(sort[i] === sort[i + 1]) {
            alert(`o numero que mais aparece e: ${sort[i]}`)
            return
        }
    }
} 

const mediana = (...valor) => {
    const arryCopy = [...valor]
    const string = arryCopy.toString()
    const quebrar = string.split(' ')
    const numero = quebrar.map(item => parseInt(item))
    const ordernar = numero.sort((a, b) => a - b)
    let meio = Math.floor(ordernar.length / 2);
    console.log(meio)
    if(numero.length % 2 == 0) {
        const mais = ordernar[meio] + ordernar[meio - 1]
        const conta = mais / 2
        alert(`o numero central de ${ordernar} e ${conta}`)
        console.log(conta)
    }
    else {
        alert(`o numero central de ${numero} e ${numero[meio]}`)
    }
}

do {
    opcao = prompt('escolha sua opcao \n 1. calcular media \n 2. calcular media ponderada \n 3. moda \n 4. mediana \n 5. sair')
    switch(opcao) {
        case '1':
            const valores = prompt('digite todos os valores abaixo(separe com espaços):')
            media(valores)
            break
        case '2':
            mediaPonderada()
            break
        case '3':
            const valor = prompt('digite todos os valores abaixo(separe com espaços): ')
            moda(valor)
            break
        case '4':
            const num = prompt('digite todos os valores abaixo(separe com espaços): ')
            mediana(num)
            break
        case '5': 
            alert('saindo...')
            break
        default:
            alert('opcao invalida')
    }
} while (opcao !== '5');