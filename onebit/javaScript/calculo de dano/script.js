const atacante = prompt('qual o nome do personagem atacante')
const poderDeAtaque = parseFloat(prompt('qual e sua poder de ataque'))

const defensor = prompt('nome do personagem defensor')
const vida = parseFloat(prompt('quantos pontos de vida ele tem'))
const defesa = parseFloat(prompt('qual seu poder de defesa'))
const escudo = confirm('ele possui um escudo ?')
let danorecebido = 0


if (poderDeAtaque > defesa && escudo == false) {
    const dano1 = poderDeAtaque - defesa
    danorecebido = vida - dano1
    if (danorecebido <= 0) {
        window.alert('o defensor morreu')
    }
    else {
        window.alert(`${atacante} causou ${danorecebido} pontos de dano em ${defensor}`)
    }

} else if (poderDeAtaque > defesa && escudo == true) {
    const dano2 = (poderDeAtaque - defesa) /2
    danorecebido = vida - dano2
    if (danorecebido <= 0) {
        window.alert('o defensor morreu')
    }
    else {
    window.alert(`${atacante} causou ${danorecebido} pontos de dano em ${defensor}`)
    }
} 




