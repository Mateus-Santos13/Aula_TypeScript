//Exercício 3 - Escreva um programa que crie uma collection set do tipo number. 
//O programa deverá solicitar ao usuário 10 números inteiros não repetidos e adicione-os individualmente 
//na collection set. Em seguida, ele mostra na tela todos os elementos da collection set.
// EX: A entrada do usuário foi: [2, 5, 10, 3, 4, 2, 2, 3, 10, 5]
// A saída deve ser:  Listar dados do Set:
//                    2
//                    3
//                    4
//                    5
//                    10

import rs = require("readline-sync");
const numeros : Set<Number> = new Set<Number>(); //Criando uma collection set

for(let i = 0; i < 10; i++){
    numeros.add(rs.questionInt("Adicione um numero ao Collection Set: "));// Adicionando 10 valores dentro da collection set.
}

console.log("Listar dados do Set:");
numeros.forEach(numero => console.log(numero));// Para cada um dos valores dentro da collection set, printa o valor. 