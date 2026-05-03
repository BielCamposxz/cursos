// json serve para comunicacao de dados de uma aplocao para outro
// todas as linguagens de programaçao entendem um arquivo json
// tipos: string, number , boleanos e null
// JSON.stringify()
// JSON.parse()


const str = `{
    "nome": "gabriel",
    "idade": 16,
    "amigos": ["felipe", "maria", "paulo"]
}`

// consverte uma string valida de um arquivo json para objeto 
const obj = JSON.parse(str)
console.log(obj)


const str2 = JSON.stringify(obj) //consverte um objeto para uma string
console.log(str2)

