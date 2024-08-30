console.log(`Trabalhando com condicionais`);

console.log(`Destinos oferecidos`);

const listaDeDestinos = new Array(
  `Kyoto`,
  `Texas`,
  `Polonia`,
  `shenzhen`,
  `moscou`

);

console.log(listaDeDestinos);

const idadeComprador = 19;
const menorAcompanhado = true;

if (idadeComprador >= 18) {
 console.log(`comprador maior de idade: destino selecionado ${listaDeDestinos[0]}`);
  
if (idadeComprador < 18 && menorAcompanhado == true) {
  
  console.log (`o menor encontra-se acompanhado,então ele pode realizar a viagem`);
  
  console.log(`o destino escolhido foi: ${listaDeDestinos[4]}`)
  
} else if (idadeComprador <18 && menorAcompanhado == false){
   console.log("o comprador é menor e não está acompanhado");
 }
}
