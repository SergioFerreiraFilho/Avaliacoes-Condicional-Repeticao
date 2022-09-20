// 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
// umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
 
// Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
// com a tabela abaixo. 


let peso = 84 ;
let altura = 1.74 ;
let imc = peso/(altura*altura)

if (imc < 18.5) console.log("Abaixo do Peso");
else if (imc >= 18,5 || imc < 25) console.log("Peso Normal");
else if (imc >= 25 || imc < 30) console.log("Acima do Peso");
else if (imc >= 30) console.log("Obeso");

