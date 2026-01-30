//Exercício 2 - Inicializa um vetor com 10 valores inteiros [2, 5, 1, 3, 4, 9, 7, 8, 10, 6], em seguida, o usuário
// deve informar um valor e o programa retorna a posição do número buscado.
// Caso o número não exista, o programa deve retornar que o número não foi encontrado.
// EX: Digite o número que você deseja encontrar: 4. O número está na posição 4.

import rs = require("readline-sync");

const numeros : Array<Number> = new Array<Number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

console.table(numeros);

let numeroBusca = rs.questionInt("Escolha o numero que voce quer buscar: ");

if(numeros.includes(numeroBusca)){
    console.log("O numero está na posicao: ",numeros.indexOf(numeroBusca));
}else{
    console.log("O numero nao foi encontrado!");
}