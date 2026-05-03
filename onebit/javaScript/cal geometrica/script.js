let opcao = ''
let total = 0
let base = 0
let altura = 0

function areaTriangulo() {
    base = parseInt(prompt('digite o tamanho da base do triangulo '))
    altura = parseInt(prompt('digite o tamanho da altura do triangulo '))
    total = base * altura / 2
    alert(`a area do triangulo e de ${total}`)
}

function areaRetangulo() {
    base = parseInt(prompt('digite o tamanho da base do retangulo '))
    altura = parseInt(prompt('digite o tamanho da altura do retangulo '))
    total = base * altura
    alert(`a area do retangulo e de ${total}`)
    
}

function areaQuadrado() {
    let lado = parseInt(prompt('digite o tamanho do lado do quadrado '))
    total = lado**2
    alert(`a area do quadrado e de ${total}`)
}

function areaTrapezio() {
    let baseMenor = parseInt(prompt('digite o tamanho da base menor do trapezio '))
    let baseMaior = parseInt(prompt('digite o tamanho da base maior do trapezio '))
    altura = parseInt(prompt('digite o tamanho da altura do trapezio '))
    total = (baseMaior + baseMenor) * altura / 2 
    alert(`a area do trapezio e de ${total}`)
    
}

function areaCirculo() {
    let raio = parseInt(prompt('digite o raio do circulo'))
    total = 3,14 * raio * raio
    alert(`a area do circulo e de ${total}`)
}

function Switch() {
    opcao = prompt("escolha o opcao \n 1. area do trinagulo \n 2. area do retangulo \n 3. area do quadrado \n 4 area do trapezio \n 5. area do circulo \n 6. sair")

    switch (opcao) {
        case '1':
            areaTriangulo()
            break
        case '2':
            areaRetangulo()
            break
        case '3':
            areaQuadrado()
            break
        case '4':
            areaTrapezio()
            break
        case '5':
            areaCirculo()
            break
        case '6':
            alert("saindo...")
            break
        default:
            alert("opcao invalida")
    }
}

do {
    Switch()
} while (opcao !== '6');