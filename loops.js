// repetição for
for (var a = 0; a < 10; a++) {
  console.log(`Repetindo porque ${a} é menor que 10`)
}
// repetição while:
var i = 0;
while (i < 10) {
  console.log(`Repetindo porque ${i} é menor que 10`)
  i++
}
// repetição for each
var avergers = ["lixo", "corno", "burro", "limitado", "inculto"]

avergers.forEach(function(valor, posicao){
  console.log(`${valor} na posição ${posicao}`)
})