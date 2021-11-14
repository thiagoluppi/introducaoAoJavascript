// estrutura do if e do else-if
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
  console.log("Posso sair a noite")
} else if (idade >= 12){
  console.log("posso ir a matine")
} else {
  console.log("posso ir a escola")
}

// estrutura do switch case
var ingresso = prompt("Qual seu ingresso?");
switch (ingresso) {
  case "vip":
    console.log("Ficarei no camarote")
    break;
  case "premium":
    console.log("Ficarei na pista premium")
    break;
  case "comum":
    console.log("Ficarei na pista comum")
    break;
  default:
    console.log("Tipo de ingresso inválido")
    break;
}
