// um codigo sincrono e um cogigo padrao que le linha apos linha
// o codgio assincrono e usar itens do js para que nao pare o curso do codigo
// um codigo assincrono e quando o codigo executa varias coias ao mesmo tempo
function stap02() {
    console.log('passo 2')
}

console.log('passo 1')
stap02()
console.log('passo 3')

console.log('passo 4')

// propriedade assincrona
setTimeout(() => {
    console.log('passo 5')
}, 1000)

