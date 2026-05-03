const emailInput = document.getElementById('email')
const senhaInput = document.getElementById('senha')
const enviar = document.getElementById('enviar')

function verificarEmail(email) {
    const remover = email.replace(/(?<=[.])\w+/g, '')
    const antesDoArroba = email.match(/\w..{1,2}(?=\@)/)
    const depoisDoArroba = remover.match(/(?<=\@)\w../)
    const depoisDoPonto = email.match(/(?<=\.)\w../)
    const temArroba = email.match(/\@/)
    const temPonto = email.match(/\./)
    if(!antesDoArroba || !depoisDoArroba || !depoisDoPonto || !temArroba || !temPonto) {
        throw new Error('o email nao possui caracteristicas de um email')
    }
}

function verificarSenha(senha) {
    const temMaiuscula = senha.match(/[A-Z]/)
    const temMinuscula = senha.match(/[a-z]/)
    const temNumero = senha.match(/\d/)
    const temCaractereEspecial = senha.match(/\W/)
    const tamanho = senha.length >= 8
    if(!temMaiuscula || !temMinuscula || !temNumero || !temCaractereEspecial || !tamanho) {
        throw new Error('sua senha nao e segura')
    }

}

enviar.addEventListener('click', () => {
    try {
        verificarEmail(emailInput.value)
    } catch(error) {
        console.error(error.message)
    }
    
    try {
        verificarSenha(senhaInput.value)
    } catch(error) {
        console.error(error.message)
    }
})
