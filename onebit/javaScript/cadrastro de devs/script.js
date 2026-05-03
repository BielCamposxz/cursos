const section = document.getElementById('section')
const novaTec = document.getElementById('novaTec')
const ul = document.getElementById('ul')
let i = 0
let rows = 0


novaTec.addEventListener('click', function(ev) {
    ev.preventDefault()
    
    const tecLi = document.createElement('li')
    tecLi.innerText = 'nome da tecnologia: '
    const rowindex = rows
    rows++
    tecLi.id = 'rows-' + rowindex
    tecLi.className = 'rows'
    
    const inputTec = document.createElement('input')
    inputTec.id = `tecname-${rowindex}`
    inputTec.name = 'tecname'
    
    const label1 = document.createElement('label')
    label1.innerText = '0-2 anos'
    const radio1 = document.createElement('input')
    radio1.value = '0-2 anos'
    radio1.type = 'radio'
    radio1.setAttribute('name', `radio${i}`)
    const id1 = 'expraido' + rowindex + '.1'
    radio1.id = id1
    
    const label2 = document.createElement('label')
    label2.innerText = '3-4 anos'
    const radio2 = document.createElement('input')
    radio2.value = '3-4 anos'
    radio2.type = 'radio'
    radio2.setAttribute(`name`, `radio${i}`)
    const id2 = 'expraido' + rowindex + '.2'
    radio2.id = id2
    
    const label3 = document.createElement('label')
    label3.innerText = '5+ anos '
    const radio3 = document.createElement('input')
    radio3.value = '5+ anos'
    radio3.type = 'radio'
    radio3.setAttribute(`name`, `radio${i}`)
    const id3 = 'expraido' + rowindex + '.3'
    radio3.id = id3
    const br = document.createElement('br')
    
    const remover = document.createElement('button')
    remover.id = 'button'
    remover.innerText = 'remover linha'
    remover.addEventListener('click', function (ev) {
        ev.preventDefault()
        ul.removeChild(tecLi)
    })
    
    tecLi.append(inputTec,radio1,label1,radio2,label2,radio3,label3,remover,br)
    ul.appendChild(tecLi)
    section.append(ul)
    i++
})

const cadrastrar = document.getElementById('cadrastrar')

const devs = []
cadrastrar.addEventListener('click', function (ev) {
    ev.preventDefault()

    const li = document.querySelectorAll('.rows')
    const devName = document.getElementById('name').value
    const tec = []
    
    li.forEach(function (row) {
        const tecName = document.querySelector('#' + row.id + ' input[name="tecname"]').value
        const tecExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        tec.push({nametec: tecName, experiencia: tecExp})
    })
    
    devs.push(devName, tec)
    console.log(devs)
    document.getElementById('name').value = ''
    li.forEach(function (rows) {
        rows.remove()
    })
    
})