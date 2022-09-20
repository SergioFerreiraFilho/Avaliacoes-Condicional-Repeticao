// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
// decrescente

let x = 20;
let y = 30;
let z = 10;
  // Estou criando 6 condicionais, para fazer a checagem, quando os numeros correspondem a o if, e imprimido na tela a informação.
if(x > y && y > z){
    document.write('ordem decrescente: ',x,' < ', y,' < ',z);
    }
if(z > y && y > x){
    document.write('ordem decrescente: ',z,' < ', y, ' < ',x);
    }
if(x > z && z > y){
    document.write('ordem decrescente: ',x, ' < ',z,' < ', y);
    }
if(y > z && z > x){
    document.write('ordem decrescente: ',y,' < ', z, ' < ',x);
    }
if(y > x && x > z){
    document.write('ordem decrescente: ',y,' < ', x,' < ', z);
    }
if(z > x && x > y){
    document.write('ordem decrescente: ',z,' < ', y,' < ', y);
    }

    
