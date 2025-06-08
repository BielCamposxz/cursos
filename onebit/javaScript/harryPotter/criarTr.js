export function criarTr(valor, string) {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.className = string
    td1.textContent = valor
    const td2 = document.createElement('td')
    td2.textContent = string

    tr.append(td2, td1)
    return tr
}