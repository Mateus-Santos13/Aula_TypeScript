//Exercicio 1 - Crie

import rs = require("readline-sync");


const numeros : Array<number> = new Array<number>; 


numeros.push(5);
numeros.push(1,5,7,9);
numeros.push(rs.questionInt("Digite um numero: "));




for(let numero of numeros){
    console.log(numero);
}
// Verifica se o numero 5 existe
console.log("O numero 5 existe? ", numeros.includes(5));

// Verifica o indice do elemento
console.log("O indice do numero 5: ", numeros.indexOf(7));


numeros.splice(numeros.indexOf(7), 1);

console.table(numeros);


