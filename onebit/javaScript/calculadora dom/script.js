const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedkeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const res = eval(input.value)
    resultInput.value = res

    resultInput.classList.remove('error')

}

document.getElementById("equal").addEventListener('click', function () {
    if(input.value === '') {
        alert('digite um numero para calcular')
    }
    else  {
        calculate()
    }
})

document.getElementById("clear").addEventListener('click', function () {
    input.value = ''
    input.focus()
})

document.getElementById("themeSwitcher").addEventListener("click", function () {
    if(main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"

    }
})

let copy = document.getElementById('copyToClipboard')

copy.addEventListener('click', function () {
    if(resultInput.value === '') {
        alert('valor invalido')
    }
    else {
        copy.classList.add('success')
        resultInput.classList.add('success')
        copy.innerText = 'copiado'
        window.navigator.clipboard.writeText(resultInput.value)
    }
})

copy.addEventListener('mouseout', function () {
    copy.innerText = 'copy'
    copy.classList.remove('success')
    resultInput.classList.remove('success')
})