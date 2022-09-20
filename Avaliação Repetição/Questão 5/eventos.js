// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. 
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos 
// números lidos. O número que encerrará a leitura será zero. 

let numeros = [70, 5, 45, 30,];

let qtd_pares = 0;
let qtd_impares

let somaPares = 0
let somaLidos = 0
let mediaPares = 0
let mediaLidos = 0

for (let n = 0; n < numeros.length; n++) {
    somaLidos += numeros[n]
    if (numeros[n] % 2 === 0){
        qtd_pares++;        
        somaPares += numeros[n];
    } else {
        qtd_impares++
    }
    
}

mediaPares = somaPares/qtd_pares
mediaLidos = somaLidos/numeros.length

console.log(mediaPares)
console.log(mediaLidos)
