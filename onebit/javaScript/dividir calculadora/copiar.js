function copiar() {
    const resultInput = document.getElementById('result')
    const copy = document.getElementById('copyToClipboard')
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
        copy.addEventListener('mouseout', function () {
            copy.innerText = 'copy'
            copy.classList.remove('success')
            resultInput.classList.remove('success')
        })
    })
}

export { copiar }