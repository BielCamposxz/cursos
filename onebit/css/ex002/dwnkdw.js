var li = document.getElementById('.li')
li.addEventListener('mouseenter', entar)
li.addEventListener('mouseout', sair)

function entar() {
    li.style.backgroundColor = 'rgb(74, 74, 74)'
}