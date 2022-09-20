// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, 
// imprimindo o resultado. 

let numero = 20

if (numero > 0) {
    numero = numero*2
    document.write('O numero original era positivo então o dobro e: ' + numero)
} else {
    numero = numero*3
    document.write('O numero original era negativo então o triplo e: ' + numero)
}