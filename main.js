// vamos recortar o codigo do script e vamos colocar ele dentro desse arquivo

var welcome = "Hello JavaScript - Automação JS"
// apos colocar o id no paragrafo acima, agora da pra usar o metodo getElementById para pegar o elemento
document.getElementById("Welcome").append(welcome);
// console.log imprime o texto no console do navegador e não na tela da pagina:
console.log(welcome)