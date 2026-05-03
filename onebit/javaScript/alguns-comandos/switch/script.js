const resultado = parseInt(prompt("escolha uma alternativa 2 + 3 e igual a \n A)1 \n B) 4  \n C) 10 "))

switch (resultado) {
    case "a":
        alert('errado');
        break
    case 5:
        alert('certo')
        //para na casa que esta o break
        break
    case "c":
        alert('errado')
        break
        //se nao for nenhum dos que estiver a cima
    default:
        alert('fim')
}
