class User {
    constructor(fullName, emal, password) {
        this.nome = fullName
        this.emal = emal
        this.senha = password
    }

    confirmar(email,senha) {
        if(this.emal === email && this.senha === senha) {
            alert('login bem sucedico')
            alert(`seu nome e ${this.nome} seu email e ${this.emal} sua senha e ${this.senha}`)
        }
        else {
            alert('a senha ou email nao conferem')
        }
    }
}
function infoUser() {
    const nome = prompt('digite seu nome')
    const email = prompt('digite seu email')
    const senha = prompt('digite sua senha')
    const usuario = new User(nome, email, senha)
    const confirmEmail = prompt('confirme seu email')
    const confirmSenha = prompt('confirme sua senha')
    usuario.confirmar(confirmEmail, confirmSenha)
    console.log(usuario)
}
export { infoUser }
export { User }