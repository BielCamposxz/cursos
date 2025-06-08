var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')
var para = document.getElementById('para')


function clicar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[erro] campos invalidos')
    }
    else {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
        if (i < f) {
            while (i <= f) {
                res.innerHTML += ` ${i} > `
                i += p
            }
        }
        else {
            if (i > f) {
                do {
                    res.innerHTML += ` ${i} > `
                    i -= p
                } while (i >= f) 
            }
        }
        res.innerHTML += 'fim'
    }
    para.innerHTML = 'calculado: '
    
}