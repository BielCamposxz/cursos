const word = prompt('escreva uma palavra e veja ela invertida')
let inverted_Word = ""

let i = word.length - 1
while(i >= 0) {
    inverted_Word += word[i]
    i--
}

alert(`a palvra "${word}" invertida e igual a "${inverted_Word}"`)