// com npm
const gerador = require('generate-password')

class GeradorDeSenhas {
    static gerarSenha(tamanho, number, uppercase, lowercase) {
        return gerador.generate({
            length: tamanho,
            numbers: number,
            uppercase: uppercase,
            lowercase: lowercase
        })
    }
}

console.log(GeradorDeSenhas.gerarSenha(10, true, true, true))


// gerar sem npm

const caracteres = 'abcdefghijklmnopqrstovwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&-_?'
const tamanho = 10
let senha = ''  


for(let i = 0; i< tamanho; i++) {
    const min = 0;  
    const max = caracteres.length 
    const numeroInteiroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    senha += caracteres[numeroInteiroAleatorio]
}
console.log(senha)