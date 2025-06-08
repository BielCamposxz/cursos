const Acconut = require("./classes/account");
const App = require("./classes/app");
const Trasfer = require("./classes/transfer");

const gabriel = new Acconut(1000, 'gabriel')
const felipe = new Acconut(500, 'felipe')

// testando depositos e emprestimos
App.realizandoDeposito(gabriel, 100)
App.realizandoEmprestimo(gabriel, 500) 
console.log(gabriel.verSaldo)
console.log(felipe.verSaldo)

// trasferir pelo App
App.realizandoTrasferencia(gabriel, felipe, 1000)
console.log(gabriel.verSaldo)
console.log(felipe.verSaldo)

// trasferir pelo Account
const transferFelipe = new Trasfer(felipe, 100)
gabriel.newTrasferencia(transferFelipe)
console.log(gabriel.verSaldo)
console.log(felipe.verSaldo)
