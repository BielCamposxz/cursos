const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const nome = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadtype = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const obs = document.querySelector('textarea[name="observation"]').value

    let salada = ''

    document.querySelectorAll('input[name="salad"]:checked').forEach( function (item) {
        salada += item.value
    })

    console.log({nome, address, breadtype, main, salada, obs})
})