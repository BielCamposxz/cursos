// primeiro abre a pasta no terminal
// npm init no terminal
// coloca as informaçoes do npm init para criar um arquivo json
// baixar: npm install --save "nome do modulo"
// npm install --save-dev eslint serve para vc codar melhor nao se usa quando publicar o site
// posso colocar "-D" para abreviar o --save-dev

// dependencias global e quando ele baixa o pacote direto no seu computador
// instalar dependencias globais npm install --global "nome do modulo/pacote"

// para remover um pacote se usa o mpn uninstall "nome do pacote"
// se eu quiser baixar algo dps de eu ter apagado e so eu usar npm install que volta o arquivo "node_modules"
const lodash = require('lodash')

// verifica se isso e um arry 
console.log(lodash.isArray([]))
// retorna o valor dento do () para kebabcase
console.log(lodash.kebabCase('gabriel campos figueria'))

// npx-npm-script
// serve para executar as bibliotecas que a gente instalar pelas linhas de comando
// nem todos sao executaveis tem que ver na documentaçao ou se tiver uma pasta dentro do node_modules chamada .bin
// executar: npx "nome do pacote baixado"

// scripts do npm
// serve para executar os arquivos pelo .json
// se eu colocar "npm run test" vai executar o comando que coloquei no .json
// serve basicamente como um atalho

// tambem posso executar esse arquivo com esse scripts no .json
// com o comando "npm run (o nome da chave no .json)"
// se eu usar a chave start no .json nao preciso escrever "run"
// so usar "npm start"
const hello = require('hello-world-npm')
console.log(hello())