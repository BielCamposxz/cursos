


function clicar() {
    var num = document.getElementsByName('num')[0]
    var res = document.getElementById('res')
    if (num.value.length == 0) {
        window.alert('escreva um numero valido')
    }
    else {
        var n = Number(num.value)
        var c = 1
        
        while (c <= 10) {
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
            c++
        }
    }
}