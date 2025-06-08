const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = 'ola, mundo'
})

document.getElementById('type').addEventListener('click', function () {
    // input.type = input.type !== 'radio' ? 'radio' : 'text'
    input.type === 'radio' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'escreva algo'
})

document.getElementById('disable').addEventListener('click', function () {
    input.disabled === 'true' ? input.setAttribute('disabled', 'false') : input.setAttribute('disabled', 'true')
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.a
    console.log(data)
    console.log(input.dataset.a = 'ffff')
})