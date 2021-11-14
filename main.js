// vamos recortar o codigo do script e vamos colocar ele dentro desse arquivo
var welcome = "Hello JavaScript - Automação JS"
document.getElementById("Welcome").append(welcome);
// console.log é tipo o puts do Ruby:
console.log(welcome);


// var avengers = new Array(); ou então fazer mais simples como abaixo:
var avengers = ["idiota", "fantasioso", "sem-graça"];

console.log(avengers);

avengers.push("otario-verde");

console.log(avengers);

// remover o primeiro e o ultimo registro de um array:
avengers.push("aranha lixo");
console.log(avengers);
// avengers.pop(); // remove o ultimo registro do array
// avengers.shift(); // remove o primeiro registro do array

// para remover apenas um registro distinto, como aranha lixo:
// descobrir sua posicao:
var indice = avengers.indexOf("aranha lixo");
console.log(indice);
console.log(avengers);

// agora fazer um splice na posicao. O metodo splice remove.
avengers.splice(indice);

console.log(avengers);

// para concatenar dois arrays:
var newAvengers = ["mais do mesmo", "já deu", "quem ainda ve essa merda?"]

var result = avengers.concat(newAvengers);
console.log(result)