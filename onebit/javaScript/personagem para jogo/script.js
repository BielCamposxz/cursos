import { Mage } from "./mage.js";
import { Thief } from "./thief.js";
import { Warrior } from "./warrior.js";

const paulo = new Warrior('paulo', 200, 40, 30, 50, 'defesa')
const gabriel = new Thief('gabriel', 100, 50, 50)
const felipe = new Mage('felipe', 150, 20, 20, 50)

console.log(`o gabriel atacou o felipe e o felipe esta com ${gabriel.atacar(felipe)} de vida` )
console.log(`o gabriel atacou o paulo e o paulo ficou com ${gabriel.atacar(paulo)} de vida`)

console.log(`o felipe atacou o gabriel e o gabriel ficou com ${felipe.atacar(gabriel)} de vida`)

console.log(`o paulo atacou o feliup e o felipe ficou com ${paulo.atacar(felipe)} de vida`)

console.log('o paulo mudou sua posicao de defesa para ataque')
paulo.mudarPosiçao()

console.log(`o gabriel atacou o paulo e o paulo ficou com ${gabriel.atacar(paulo)} de vida`)
console.log(`o paulo atacou o felipe e o felipe ficou com ${paulo.atacar(felipe)} de vida`)
console.log(`o felipe curou o gabriel e o gabriel ficou com ${felipe.curar(gabriel)} de vida`)

console.log(paulo)
console.log(gabriel)
console.log(felipe)

 