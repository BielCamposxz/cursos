const contactList = document.getElementById('contact-list')

function criar() {

    const h3 = document.createElement('h3')
    h3.innerText = 'contato'

    const ul = document.createElement('ul')

    const li = document.createElement('li')
    li.innerText = 'nome'
    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'fullname'
    li.appendChild(input)
    ul.appendChild(li)
    ul.appendChild(document.createElement('br'))
    
    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'telefone'
    const phoneInput = document.createElement('input')
    phoneInput.type = 'number'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))
    
    const addresLi = document.createElement('li')
    addresLi.innerHTML = '<label for address> endereco: </label>'
    const address = document.createElement('input')
    address.type = 'text'
    address.name = 'address'
    address.id = 'address'
    addresLi.appendChild(address)
    ul.appendChild(addresLi)
    ul.appendChild(document.createElement('br'))
    
    contactList.append(h3,ul)
}

function remover() {
    const titles = document.getElementsByTagName('h3')
    const contac = document.getElementsByTagName('ul')

    // remove o elemento filho
    contactList.removeChild(titles[titles.length -1])
    contactList.removeChild(contac[contac.length -1])
}