// 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
// 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
// aproveitamento, usando a fórmula: 
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 

// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
// suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
// mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
// Média de aproveitamento Conceito 

// >= 90 A 
// >= 75 e < 90 B 
// >= 60 e < 75 C 
// >= 40 e < 60 D 
// < 40 E

let NumeroAluno = 210;
let exercicio1 = 90;
let exercicio2 = 50;
let exercicio3 = 30;
let mediaExercicios = (exercicio1 + exercicio2 + exercicio3)/3;
let avaliacao1 = 50;
let avaliacao2 = 100;
let avaliacao3 = 80;
let mediaAvaliacao = (avaliacao1 + avaliacao2*2 + avaliacao3*3 + mediaExercicios)/7;
let conceito;

console.log('Aluno: ', NumeroAluno, );
console.log('Notas dos exercicios:', 'nota 1: ',exercicio1, 'nota 2: ',exercicio2, 'nota 3: ',exercicio3);
console.log('Media dos exercicios: ', mediaExercicios);
console.log('Notas das avaliacoes:', 'nota 1: ',avaliacao1, 'nota 2: ',avaliacao2, 'nota 3: ',avaliacao3);
console.log('Media de aproveitamento: ', mediaAvaliacao );

if (mediaAvaliacao >= 90) {
    conceito = 'A'
} else if (mediaAvaliacao >= 75 && mediaAvaliacao < 90) {
    conceito = 'B'
} else if (mediaAvaliacao >= 60 && mediaAvaliacao < 75) {
    conceito = 'C'
} else if (mediaAvaliacao >= 40 && mediaAvaliacao < 60) {
    conceito = 'D'
} else if (mediaAvaliacao < 40) {
    conceito = 'E'
    
}

if(conceito == 'A' || conceito == 'B' || conceito == 'C' ){
    console.log('Aprovado ');
    console.log(' Conceito ', conceito);

}else{
    console.log('Reprovado ');
    console.log(' Conceito ', conceito);
}



