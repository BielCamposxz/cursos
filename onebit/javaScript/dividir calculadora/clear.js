function clear() {
    const input = document.getElementById('input')
    document.getElementById("clear").addEventListener('click', function () {
        input.value = ''
        input.focus()
    })
}

export { clear }