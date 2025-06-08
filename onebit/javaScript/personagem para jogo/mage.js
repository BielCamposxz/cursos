import { Character } from "./character.js";

export class Mage extends Character {
    constructor(nome, vida, ataque, defesa, magia) {
        super(nome, vida, ataque, defesa)
        this.magia = magia
    }

    atacar(alvo) {
        let conta1 = (this.ataque + this.magia) - alvo.defesa
        if(conta1 < 0) {
            conta1 = Math.abs(conta1)
            return alvo.vida = alvo.vida - conta1
        }
        return alvo.vida =  alvo.vida - conta1
    }

    curar(alvo) {
        console.log(alvo.vida)
        return alvo.vida = alvo.vida + this.magia * 2
    }
}