import { calculate } from "./calcular.js"
function escrever() {
    const allowedkeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    const input = document.getElementById('input')
    document.querySelectorAll('.charKey').forEach( function (btn) {     
        btn.addEventListener('click', function () {
            const value = btn.dataset.value
            input.value += value
        })
    })

    input.addEventListener('keydown', function (ev) {
        ev.preventDefault()
    if(allowedkeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        if(input.value === '') {
            alert('digite um numero para calcular')
        }
        else  {
            calculate()
        }
    }
})
}

export { escrever }