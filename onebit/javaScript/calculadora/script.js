var opa = document.getElementById('opa')

function mais() {
    var mais = document.getElementById('mais')
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var res = document.getElementById('res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var s = n1 + n2
    res.innerHTML = `resultado: ${s}`
    opa.innerText = '+'
}

function menos() {
    var menos = document.getElementById('menos')
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var res = document.getElementById('res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var sub = n1 - n2
    res.innerHTML = `resultado: ${sub}`
    opa.innerText = '-'
}

function mul() {
    var menos = document.getElementById('mul')
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var res = document.getElementById('res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var mu = n1 * n2
    res.innerHTML = `resultado: ${mu}`
    opa.innerText = 'X'
}

function div() {
    var div = document.getElementById('div')
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var res = document.getElementById('res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var di = n1 / n2
    res.innerHTML = `resultado: ${di}`
    opa.innerText = '/'

}