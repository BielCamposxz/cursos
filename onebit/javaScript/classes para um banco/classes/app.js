const Loan = require("./loan");
const User = require("./user")

module.exports = class App {
    constructor() {}

    static newUser(fullName, email, password) {
        const emails = User.Usuarios.map(user => user[1]);
        if (emails.includes(email)) {
            console.log('Já possui um usuário com esse email');
        } else {
            new User(fullName, email, password);
            User.Usuarios.push([fullName, email, password]);
        }
    }


    static findUserByEmail(email) {
        return User.Usuarios.find(user => user[1] === email);
    }

    static realizandoDeposito(usuario, valor, dataDeCriacao = new Date()) {
        usuario.newDeposit({valor, dataDeCriacao})
    }
    
    static realizandoEmprestimo(usuario, valor, dataDeCriacao = new Date()) {
        usuario.newLoan({valor, dataDeCriacao})
    }

    static realizandoTrasferencia(usuarioEnviar, usuarioReceber, valor) {
        usuarioEnviar.diminuirSaldo(valor)
        usuarioReceber.almentarSaldo(valor)
    }

    static mudarTaxa() {
        new Loan().mudarValorDaTaxa = 10
    }
}
