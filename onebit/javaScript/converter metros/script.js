const metros = parseInt(prompt('quantos metros vc quer converter? '))
const unidadesDeMedida = prompt('\n milimetro (mm) \n centimetro (cm) \n decimetro (dm) \n decametro (dam) \n quilômetro (km)')
const mm = metros * 1000
const cm = metros * 100
const dc = metros * 10
const dam = metros / 10
const km = metros / 1000

switch (unidadesDeMedida) {
    case "mm":
        alert(`${metros} metros tem ${mm} milimetros`)
    break
    case "cm":
        alert(`${metros} metros tem ${cm} milimetros`)
        break
    case "dm":
        alert(`${metros} metros tem ${dc} milimetros`)
    break
    case "dam":
        alert(`${metros} metros tem ${dam} milimetros`)
    break
    case "km":
        alert(`${metros} metros tem ${km} milimetros`)
    break
    default:
        window.alert('unidade de medida escrita de forma incorreta')

}