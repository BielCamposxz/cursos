function horas() {
    const data = new Date()
    const segundos = String(data.getSeconds()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const hours = String(data.getHours()).padStart(2, '0');
    const p = document.querySelector('p')
    const hora = `${hours}:${minutos}:${segundos}`
    p.textContent = hora
}

setInterval(horas, 1000)
horas()


