const adicionar = document.getElementById('adicionar')
const remover = document.getElementById('remover')
const ul = document.getElementById('ul')

adicionar.addEventListener('click', function (ev) {
  if(posicao.value === '' || nome.value === '' || camisa === '') {
    alert('prencha os campos')
  }
  else {
    ev.preventDefault()
    const nome = document.getElementById('nome').value
    const posicao = document.getElementById('posicao').value
    const camisa = document.getElementById('camisa').value
    
    
    const li = document.createElement('li')
    
    li.innerText = `nome: ${nome} \n posicao: ${posicao} \n camisa ${camisa}`
    ul.append(li)
    li.id = 'jogador-' + camisa
    console.log(li)
    

    document.getElementById("nome").value = ""
    document.getElementById("posicao").value = ""
    document.getElementById("camisa").value = ""
  }
})

remover.addEventListener('click', function () {
  
  const number = document.getElementById('removera').value
  const removerJogador = document.getElementById('jogador-' + number)

  document.getElementById('ul').removeChild(removerJogador)

  document.getElementById('removera').value = ''
})

