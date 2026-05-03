const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }

// a "?" verifica se a propriedade ela nao e null ou undefined / se exite algo com esse nome
// ai com isso o javascript para de ler ate dar undefined ou null
console.log(user?.friends?.[0]?.phone?.ddd)

// quando e javascript le a brothder ele e undefined ai vem o "5" que e como se tivesse tentando pergar um propriedade interna do brothder
console.log(user?.brothers?.[5].name)
