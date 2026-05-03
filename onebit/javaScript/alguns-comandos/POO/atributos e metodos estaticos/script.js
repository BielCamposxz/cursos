// isso serve para que eu possa chamar um atributo ou metodo fora da classe sem eu precissar criar uma instacia da classe basta escrever "ClassTest.metodo"
// Ex: uma classe precisa definir um atributo que seja global, ou seja, que tenha o mesmo valor pra todas as instancias

class Reservar {
    constructor(quatidade, quarto, dias) {
        this.quatidadeDePessoas = quatidade
        this.quarto = quarto
        this.dias = dias
        // e para voce usar o valor dela voce tem que escrver o nome da classe e dps o nome da "variavel" que voce atribuil no static
        this.total = dias * Reservar.taxabase + quatidade * Reservar.taxaPorPessoa
    }

    // para criar voce escreve static e pois o nome da "variavel" que voce quiser e atribui um valor nela
    static taxabase = 0
    static taxaPorPessoa = 0

    static get showBaseFee() {
        console.log(`o valor da diaria fica  ${Reservar.taxabase}`)
    }

    static get mostrarTaxaPorPessoa() {
        console.log(`cada pessoa paga ${Reservar.taxaPorPessoa}`)
    }

    static set ValorDaDiaria(valor) {
        return Reservar.taxabase = valor
    }

    static set valorPorPessoa(valor) {
        return Reservar.taxaPorPessoa = valor
    }
}

// usando o acesador get para mostar o valor da diaria junto com o atributo estatico
Reservar.ValorDaDiaria = 150
Reservar.valorPorPessoa = 15
Reservar.showBaseFee
Reservar.mostrarTaxaPorPessoa

const r1 = new Reservar(3, '201', 5)
console.log(r1)

const r2 = new Reservar(2, '204', 2)
console.log(r2)

const r3 = new Reservar(5, '201', 10)
console.log(r3)

const r4 = new Reservar(2, '204', 4)
console.log(r4)


