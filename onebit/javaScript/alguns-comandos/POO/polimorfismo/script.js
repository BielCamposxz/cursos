// polimorfismo e quando voce sobrescreve um metodo ou artrubuto de uma class pai
// ex: a class veiculo possui alguns atributos e um metodo move()
// as classes bike, car, ship, plane todas essas sao filhos de veiculo, porem
// cada uma delas implementada o metodo move() de forma diferente
// isso voce estaria sobrescrevendo um metodo isso e o polimorfismo

class Vehicle {
    move() {
        console.log('o veiculo es se movendo')
    }
}

class Car extends Vehicle {
    move() {
        console.log('o carro as se movendo')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('o navio esta no mar')
    }
}

class Aviao extends Vehicle {
    move(speed) {
        console.log(`a arenonave es voando a ${speed} km/h`)
    }
}

// com isso voce chama o mesmo metodo mas cada um com sua inplementaçao diferente
const car = new Car()
const navio = new Ship()
const aviao = new Aviao()

car.move()
navio.move()
aviao.move(88)

function start(veiculo, speed) {
    console.log('iniciando um veiculo...')
    veiculo.move(speed)
}

start(car)
start(navio)
start(aviao, 88)