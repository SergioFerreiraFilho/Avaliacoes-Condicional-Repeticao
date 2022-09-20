// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a 
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores 
// negativos e o percentual de valores negativos e positivos.

let numeros = [10, 9, 90, 89, -12];

let soma = 0;
let qtd_positivos = 0;

for (let n = 0; n < numeros.length; n++) {
  //soma = soma + numeros[n];
  soma += numeros[n];

  if (numeros[n] > 0) {
    qtd_positivos++;
  }
}

document.write("Media:", soma / numeros.length);
