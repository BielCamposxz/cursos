function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var fundo = document.getElementById('tudo')
var data = new Date()
var hora = data.getHours()

if (hora < 12) {
    img.src = 'img/manha.jpg'
    msg.innerHTML = `agora sao ${hora} horas`
    fundo.style.backgroundColor = '#e2cd9f'

}
else {
    if(hora < 18) {
        img.src = 'img/tarde.jpg'
        msg.innerHTML = `agora sao ${hora} horas`
        fundo.style.backgroundColor = '#b9846f'
    }
    else {
        img.src = 'img/noite.jpg'
        msg.innerHTML = `agora sao ${hora} horas`
        fundo.style.backgroundColor = '#515154'
    }
}
}