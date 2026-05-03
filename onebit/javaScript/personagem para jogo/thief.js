import { Character } from "./character.js";


export class Thief extends Character {
    constructor(nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
    }
    atacar(alvo) {
        let conta1 = (alvo.defesa - this.ataque) * 2
        if(conta1 < 0) {
            conta1 = Math.abs(conta1);
            return alvo.vida = alvo.vida - conta1
        } else {
            return alvo.vida = alvo.vida - conta1
        }
    }
}