export function calculate() {
    const resultInput = document.getElementById('result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const res = eval(input.value)
    resultInput.value = res

    resultInput.classList.remove('error')
}
