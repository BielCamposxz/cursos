let number = parseInt(prompt('escolha um numero para ser multiplicado por 20'))
let num = 1
let calculo = ""

while (num <= 20) {
    let mul = number * num
    calculo += `${number} X ${num} = ${mul} \n`
    num++
}

alert(calculo)