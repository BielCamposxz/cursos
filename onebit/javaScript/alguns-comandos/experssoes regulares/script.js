// expressoes regulares e uma forma de encontrar padroes em um string
// o ^ mostra o primeiro que voce escrever ex: /^gabriel/
// o ^ dentro dos conchetes e um exprecao de negacao igual o ! 
// o $ mostra o ultimo que voce colocar ex: /gabriel$/
// o | encontra uma coisa ou outra ex: /gabriel | felipe/
// o + mostra as letras em sequencia ex: /a+/ mostras todos que tem mais de um a em sequencia
// o . mostra qualquer coisa depois ex /a./ vai mostra qualquer coisa depois do "a" independente se for numero, letras ou caracteres especias
// quanto mais pontos mais letras/numeros eu quero
// o \ serve para escapar oque esta na frent ex: /\(..\)/ ele meio que pegar o caractare do parentese
// o \w minusculo pega todas as letras e numeros, so nao marca caractere especial
// e o \W maiusculo pega so as caracteres especiais
// o \d minusculo pega so os numeros
// e o \D maiusculo pega tudo que nao e numero
// o \s minusculo pega todos os espaços em branco
// e o \S maiusculo pega tudo que nao tem espaço
// o [] com as letras dentro voce usa todas as regras ex: /[abc]/ 
// se eu fizer [a-z] pega todas as letras de a ate z minusculos
// se eu fizer [A-Z] pega todas as letras de a ate z maiusculas
// se eu quiser pegar todas as letras e so eu fazer /[a-zA-Z]/
// o {} pega uma quantidade especifica de letras em sequencia ex: /a{1, 3}/ pega tres a em sequencia
// o (?=) pega algo que esta na frete da palavra determinada ex: /or(?=\s)/g pega todos os "or" com um espaço em branco dps
// o (?!) pega algo nao tenha algo na frete dela ex: /or(?!\s)/g pega todos que nao tem um espaço em branco na frente
// o (?<=) mostras algo que esta a tras da palavra determinada ex: /(?<=\s)or/g pega todas os "or" com uma palavra em branco antes
// o (?<!) pega todos que nao tem algo atras ex: /(?<!\s)or/g pega todos os "or" que nao tem um espaço em branco a tras
// o i no final mostras todas as palavras independente se comeca com letra maiuscula ou nao ex: /^gabriel | felipe$/i
// o g mostra todas as palavras ex: /^gabriel | felipe$/g
// e tambem pode juntar as regras ex: /^gabriel | felipe$/ig

function phoneNumber(number) {
    // o replace subistitui um parte da string
    // isso apaga todos os espaços e letras e substitui por nada
    const fixedString = number.replace(/[\sa-zA-Z]/g, "")
    // pega um pedaço especifico da exprecao regular
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=[(])\d{1,3}/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, '')
    this.fullnumber = fixedString.replace(/\W/g, "")
}

console.log(new phoneNumber('+551 (211) 9 9876-4567'))