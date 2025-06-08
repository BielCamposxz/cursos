
var c = 1
while (c <= 10) {
    console.log(c)
    c++
    //quando o "c" chegar em 3 vai parar
    if (c == 3) {
        break
    }
}

// primeiro faz o bloco mesmo que o resultado seja falso  
do {
    console.log(c)
    c += 1
} while (c <= 10)


for (var c = 1; c <= 10; c++) {
    console.log(c)
}