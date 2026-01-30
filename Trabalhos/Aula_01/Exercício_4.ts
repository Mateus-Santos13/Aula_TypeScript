//Exercício 4 - Programa que inicia uma collection set com 10 valores. O usuário deve escollher um número para buscar na collection set
// Caso o número seja encontrado, o programa retorna o número. 
// Caso não seja, o programa retorna que ele não foi encontrado.


import rs = require("readline-sync");

const numeros : Set<Number> = new Set<Number>();// Cria a collection set

numeros.add(2);
numeros.add(5);
numeros.add(1);
numeros.add(3);
numeros.add(4);
numeros.add(9);
numeros.add(7);
numeros.add(8);
numeros.add(10);
numeros.add(6); //Adiciona os valores na colection set.

let numeroBusca = rs.questionInt("Insira um valor para ser procurado dentro da Collection Set: ");

if(numeros.has(numeroBusca)){//Funcionalidade extra para buscar em que posição o número procurado esteja, caso ele seja encontrado no set
    let posicao = 0;
    for(let numero of numeros){
        if(numero === numeroBusca){
            console.log(`O numero ${numeroBusca} foi encontrado na posição ${posicao}!`);
            break;
        }
        posicao++;
    }
}else{
    console.log(`O numero ${numeroBusca} nao foi encontrado`);//Caso o número não seja encontrado, ele retorna essa mensagem.
}




