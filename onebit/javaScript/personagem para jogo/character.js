export class Character {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacar(alvo) {
        return alvo.vida = alvo.vida - (this.ataque - alvo.defesa)
    }
}