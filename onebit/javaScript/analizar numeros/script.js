var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    }
    else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0 
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            else {
                if (valores[pos] < menor) {
                    menor = valores[pos]
                }
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo nos temos ${total} numeros cadrastrados</p>`
        res.innerHTML += `<p>o maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>somando todos os valores temos o valor de ${soma}</p>`
        res.innerHTML += `<p>a media dos valores digitados e ${media}</p>`


    }
}