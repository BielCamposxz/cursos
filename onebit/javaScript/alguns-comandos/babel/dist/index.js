"use strict";

// serve para que os navegadores que nao rodem o javascript moderno consiga entender o que esta sendo escrito
// pega o codigo de ES6 e trasforma em versoes mais antigas

// para fazer uma trasformacao basta ecrever "npx babel (nome do arquivo a ser convertido)" mas essa conversao so faz no terminal
// se eu quiser jogar em outro arquivo o comando e esse "npx babel (arquivo do codigo) --out-file (arquivo de saida) --presets=@babel/preset-env"
// e para trasformar um arquivo todo usa "npx babel (nome do arquivo) --out-dir (arquivo de saida) --presets=@babel/preset-env"
var opcao = '';
var media = function media() {
  for (var _len = arguments.length, valor = new Array(_len), _key = 0; _key < _len; _key++) {
    valor[_key] = arguments[_key];
  }
  var string = valor.toString();
  var num = string.split(' ');
  var result = num.map(function (str) {
    return parseInt(str);
  });
  var conta = result.reduce(function (total, item) {
    return total + item;
  }, 0);
  var contaFinal = conta / num.length;
  alert('sua media e ' + contaFinal);
};
var mediaPonderada = function mediaPonderada() {
  var valores = [];
  var numero = parseInt(prompt('digite o valor do numero'));
  var peso = parseInt(prompt('digite o valor do peso'));
  valores.push({
    n: numero,
    p: peso
  });
  var confimar = confirm('deseja adicionar outro valor? ');
  while (confimar) {
    numero = parseInt(prompt('digite o valor do numero'));
    peso = parseInt(prompt('digite o valor do peso'));
    valores.push({
      n: numero,
      p: peso
    });
    confimar = confirm('deseja adicionar outro valor? ');
  }
  var conta1 = valores.reduce(function (total, item) {
    return total + item.n * item.p;
  }, 0);
  var conta2 = valores.reduce(function (total, item) {
    return total + item.p;
  }, 0);
  var conta3 = conta1 / conta2;
  alert('sua media ponderada e igual a: ' + conta3);
};
var moda = function moda() {
  var arry = [];
  for (var _len2 = arguments.length, numeros = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numeros[_key2] = arguments[_key2];
  }
  var string = numeros.toString();
  var quebrando = string.split(' ');
  var num = quebrando.map(function (item) {
    return parseInt(item);
  });
  var sort = num.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < sort.length; i++) {
    if (sort[i] === sort[i + 1]) {
      alert("o numero que mais aparece e: ".concat(sort[i]));
      return;
    }
  }
};
var mediana = function mediana() {
  for (var _len3 = arguments.length, valor = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    valor[_key3] = arguments[_key3];
  }
  var arryCopy = [].concat(valor);
  var string = arryCopy.toString();
  var quebrar = string.split(' ');
  var numero = quebrar.map(function (item) {
    return parseInt(item);
  });
  var ordernar = numero.sort(function (a, b) {
    return a - b;
  });
  var meio = Math.floor(ordernar.length / 2);
  console.log(meio);
  if (numero.length % 2 == 0) {
    var mais = ordernar[meio] + ordernar[meio - 1];
    var conta = mais / 2;
    alert("o numero central de ".concat(ordernar, " e ").concat(conta));
    console.log(conta);
  } else {
    alert("o numero central de ".concat(numero, " e ").concat(numero[meio]));
  }
};
do {
  opcao = prompt('escolha sua opcao \n 1. calcular media \n 2. calcular media ponderada \n 3. moda \n 4. mediana \n 5. sair');
  switch (opcao) {
    case '1':
      var valores = prompt('digite todos os valores abaixo(separe com espaços):');
      media(valores);
      break;
    case '2':
      mediaPonderada();
      break;
    case '3':
      var valor = prompt('digite todos os valores abaixo(separe com espaços): ');
      moda(valor);
      break;
    case '4':
      var num = prompt('digite todos os valores abaixo(separe com espaços): ');
      mediana(num);
      break;
    case '5':
      alert('saindo...');
      break;
    default:
      alert('opcao invalida');
  }
} while (opcao !== '5');