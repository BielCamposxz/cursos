import { Character } from "./character.js";

export class Warrior extends Character {
    constructor(nome, vida, ataque, defesa, escudo) {
        super(nome, vida,  ataque, defesa)
        this.escudo = escudo
        this.posicao = 'defesa'
        this.defesa = this.defender()
    }

    defender() {
        return this.defesa + this.escudo
    }

    atacar(alvo) {
        if(this.posicao === 'ataque') {
            const dano = this.ataque - alvo.defesa;
            return alvo.vida -= Math.max(dano, 0);
        }
    }


    mudarPosiçao() {
        if(this.posicao === 'ataque') {
            this.defender()
            return this.posicao = 'defesa'
        } else {
            this.defesa -= this.escudo
            return this.posicao = 'ataque'
        }
    }

}