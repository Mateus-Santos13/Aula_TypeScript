//Exercício 1 - Programa para criar uma collection array de objetos do tipo string. O programa deve solicitar 5 cores e adicioná-las na coleção.
//Em seguida, o programa retorna 2 saidas: a primeira são todas as cores digitadas e a segunda são as cores digitadas em ordem alfabética.


import rs = require("readline-sync");

const cores : Array<string> = new Array<string>(); 

for(let i = 0; i < 5; i++){
  cores.push(rs.question(`Digite a cor ${i + 1}: `));
}

console.log("\n=== Cores Digitadas ===");
console.table(cores);

console.log("\n=== Cores em Ordem Alfabética ===");
const coresOrdenadas = [...cores].sort();
console.table(coresOrdenadas);