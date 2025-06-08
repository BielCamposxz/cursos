var ano = new Date()
var fano = ano.getFullYear()
var txt = document.getElementById('ano')
var input = document.getElementsByName('txtm')
var res = document.getElementById('res')
var gen = ''
var img = document.getElementById('img')

function clicar() {
    if (txt.value.length == 0 || txt.value > fano) {
        window.alert('[ERRO]')
    }
    else {
        var idd = fano - Number(txt.value)
        if (input[0].checked) {
            gen = 'homem'
            if (idd < 10) {
                img.src = 'img/bebehomem.jpg'
            }
            else {
                if (idd < 18) {
                    img.src = 'img/jovemhomem.jpg'
                }
                else {
                    if (idd < 40) {
                        img.src = 'img/homemadulto.jpg'
                    }
                    else {
                        if (idd < 90) {
                            img.src = 'img/idoso.jpg'
                        }
                    }
                }
            }

        }
        if (input[1].checked) {
            gen = 'mulher'
            if (idd < 10) {
                img.src = 'img/bebemulher.jpg'
            }
            else {
                if (idd < 18) {
                    img.src = 'img/mulherjovem.jpg'
                }
                else {
                    if (idd < 40) {
                        img.src = 'img/mulheradulta.jpg'
                    }
                    else {
                        if (idd < 90) {
                            img.src = 'img/idosa.jpg'
                        }
                    }
                }
                
            }
        }
    }
    res.innerHTML = `voce tem ${idd} anos`
    res.style.textAlign = 'center'
}
