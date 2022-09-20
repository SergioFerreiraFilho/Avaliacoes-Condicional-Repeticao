// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
// normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 

// Código Condição de pagamento 

// 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
// 2 À vista no cartão de crédito, recebe 15% de desconto 
// 3 Em duas vezes, preço normal de etiqueta sem juros 
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10% 

function pagamento(etiqueta, condicao) {
    let pago = 0
    if (condicao===1) {
        pago = etiqueta - etiqueta*0.10;
    } else if ( condicao===2) {
        pago = etiqueta - etiqueta*0.15
    } else if ( condicao===3) {
        pago = etiqueta
    } else if ( condicao===4) {
        pago = etiqueta*1.10
    }
    console.log('O Valor pago sera ' ,pago)
}


pagamento(200, 1) 

pagamento(200, 2)

pagamento(200, 3)

pagamento(200, 4)

