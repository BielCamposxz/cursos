// inline
// tem que ser do mesmo nome da funcao da outras pagina mas se usar "inline as i" pode tocar o nome
import { inline } from "./inline.js"
// o seu nome pode ser trocado com o "export default", tambem so pode ter um por arquivo, pode ser uma funcao anomima o nome e irelevante, usa sem as chaves
import d from "./inline.js"

inline()
d()

// nao inline 
import exportDefault, { group } from "./no-inline.js" // pode usar o default na mesma linha dos nomeados basta passar uma virgula
group()
exportDefault()