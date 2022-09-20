// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
// calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7. 


function pesoIdeal(sexo,altura) {
    let pesoIdeal = 0
    if (sexo === "mulheres") {
        pesoIdeal = (62.1*altura) - 44.7
    } else {
        pesoIdeal = (72.7*altura) - 58
    }
    console.log(pesoIdeal)
}

pesoIdeal("mulheres",1.70)