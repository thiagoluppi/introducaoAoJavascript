// Objetos no JS: cria e já declara todas as propriedades
var disco = {
  title: "Black",
  released: 1991,
  // abaixo tem algo bem interessante no JS, pois passamos uma função como propriedade do objeto album:
  showInfo: function () {
    console.log(`Título do album: ${this.title}, lançado em: ${this.released}`);
  }
}
// então a variavel album tem 3 propriedades: title, released e showInfo que é também uma função.

// Objetos no JS: cria, mas pode declarar as propriedades futuramente.
var album = new Object();
album.title = "Black";
album.released = 1991;
album.showInfo = function () {
  console.log(`Título do album: ${this.title}, lançado em: ${this.released}`);
}
album.showInfo();
console.log(album.title);
console.log(album.released);

// por essa razão, posso até mesmo adicionar mais propriedades ao meu objeto:
album.tracks = ["Enter Sandman", "The Unforgiven", "Nothing Else Matters", "The Struggle Within"];

album.showTracks = function () {
  this.tracks.forEach(function (valor) {
    console.log(valor);
  })
}
album.showTracks();