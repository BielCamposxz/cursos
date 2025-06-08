function light () {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function dark() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme() {
    // alterna as classes
    document.body.classList.toggle('is-ligth')
    document.body.classList.toggle('is-dark')
}

document.getElementById('darkBtn').addEventListener('click', dark)
document.getElementById('lightBtn').addEventListener('click', light)
document.getElementById('switchBtn').addEventListener('click', switchTheme)