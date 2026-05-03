export function mudarCorDaCasa() {
    const tipoDeCasa = document.querySelectorAll('.house')
    tipoDeCasa.forEach(item => {
        if(item.className === 'house' && item.textContent === 'Gryffindor') {
            item.style.backgroundColor = '#7F0909'
            item.style.color = '#DB8000'
        } else {
            item.style.backgroundColor = '#AAAAAA'
            item.style.color = '#21552D'
        }
    })
}