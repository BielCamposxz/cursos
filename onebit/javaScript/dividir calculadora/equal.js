import { calculate } from "./calcular.js"
function equal() {
    const input = document.getElementById('input')
    document.getElementById("equal").addEventListener('click', function () {
        if(input.value === '') {
            alert('digite um numero para calcular')
        }
        else  {
            calculate()
        }
    })
}

export { equal }