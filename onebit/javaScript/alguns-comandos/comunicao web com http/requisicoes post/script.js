// o json server tem que ficar escutando/ligado para poder fazer as requisicoes
let i = 0
function renderArticle(articleData) {
  const article = document.createElement('article')
  article.classList.add('article')
  article.id = `article-${articleData.id}`

  const title = document.createElement('h3')
  title.classList.add('article-title')
  title.textContent = articleData.title

  const content = document.createElement('div')
  content.classList.add('article-content')
  content.innerHTML = articleData.content

  const author = document.createElement('div')
  author.classList.add('article-author')
  author.textContent = articleData.author

  article.append(title, author, content)
  document.querySelector('#articles').appendChild(article)
  i++
}

async function fetchArticles() {
  const articles = await fetch("http://localhost:3000/articles").then(res => res.json())
  articles.forEach(item => renderArticle(item))
}

document.addEventListener('DOMContentLoaded', () => {
  fetchArticles()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
  ev.preventDefault()

  // isso e oque eu quero enviar na requisicao/ para o arquivo json
  const articleData = {
    id: i + 1,
    title: document.querySelector('#title').value,
    content: document.querySelector('#content').value,
    author: document.querySelector('#author').value
  }

  // enviar a requisicao para o arquivo json
  // precisa de um segundo parametro para fazer a requisicao post
  const resposta = await fetch('http://localhost:3000/articles', {
    // para mudar o metodo
    method: 'POST',
    // sem isso a requisicoe post nao funciona
    // mas esse nao e o unico tipo, tem varios outros com diferentes formas de se escrever
    headers: {
      'Content-Type': 'application/json'
    },
    // esse e o conteudo que vai ser enviado
    // antes de enviar tem que trasformar em um string json valida
    body: JSON.stringify(articleData)
  })
  // trasforma a resposta em um arquivo json/objeto
  const salvar = await resposta.json()

  form.reset()
  renderArticle(salvar)
})
