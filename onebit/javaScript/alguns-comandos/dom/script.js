function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const li = document.getElementsByTagName('li')

    const clas = document.getElementsByClassName('contact-input')

    const name = document.getElementsByName('contact1')

    const contascts = document.querySelectorAll('')

    const first = document.querySelector('')
}

function addInput() {
    const ul = document.getElementById('inputs')
    const newLi = document.createElement('li')
    newLi.innerText = 'novo input'
                        
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
    newInput.className = 'class'
    newInput.id = 'id'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}
