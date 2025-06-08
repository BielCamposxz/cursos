const inputs = document.querySelectorAll('input')
const pai = document.getElementById('pai')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
const span3 = document.getElementById('span3')
const span4 = document.getElementById('span4')
const copiar = document.getElementById('copiar')

input1.addEventListener('input', function () {
    pai.style.borderTopLeftRadius = input1.value + '%'
    span1.innerText = input1.value + '%'
    const text = `border-radius: ${input1.value}%  ${input2.value}%  ${input3.value}%  ${input4.value}% ;`
    
    copiar.addEventListener('click', function () {
        navigator.clipboard.writeText(text)
    })
})

input2.addEventListener('input', function () {
    pai.style.borderTopRightRadius = input2.value + '%'
    span2.innerText = input2.value + '%'
    const text = `border-radius: ${input1.value}%  ${input2.value}%  ${input3.value}%  ${input4.value}% ;`
    
    copiar.addEventListener('click', function () {
        navigator.clipboard.writeText(text)
    })
})

input3.addEventListener('input', function () {
    pai.style.borderBottomRightRadius = input3.value + '%'
    span3.innerText = input3.value + '%'
    const text = `border-radius: ${input1.value}%  ${input2.value}%  ${input3.value}%  ${input4.value}% ;`
    
    copiar.addEventListener('click', function () {
        navigator.clipboard.writeText(text)
    })
})

input4.addEventListener('input', function () {
    pai.style.borderBottomLeftRadius = input4.value + '%'
    span4.innerText = input4.value + '%'
    const text = `border-radius: ${input1.value}%  ${input2.value}%  ${input3.value}%  ${input4.value}% ;`
    
    copiar.addEventListener('click', function () {
        navigator.clipboard.writeText(text)
    })
})






