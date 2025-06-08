import { User } from './classUser.js'
import { infoUser } from './classUser.js'
import { Product } from './classProduct.js'
import { infoProduct } from './classProduct.js'
let opcoes = ''

do {
    opcoes = prompt(`escolha uma opcao \n 1. user \n 2. product \n 3. sair`)
    switch(opcoes) {
        case '1':
            User
            infoUser()
            break
        case '2':
            Product
            infoProduct()
            break
        case '3':
            alert('saindo...')
            break
        default: 
            alert('opcoes invalidas')
    }
}while(opcoes !== '3')