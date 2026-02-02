//Exercício 1 - Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, 
//para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
//O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
//1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
//2: Listar todos os Clientes na fila
//3: Chamar (retirar) uma pessoa da fila 
//0: O programa deve ser finalizado. 
//Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.


import leia from "readline-sync";
import { Queue } from "./Queue";

let codigoFila; 
const fila = new Queue<string>();

console.log("*************************************");
console.log("\n   1 - Adicionar Cliente na fila     ");
console.log("   2 - Listar todos os clientes      ");
console.log("   3 - Retirar Cliente da Fila       ");
console.log("   0 - Sair                        \n");
console.log("*************************************");



let numPare = 1;
let numeroPessoas = 0;




while(numPare > 0){
        codigoFila = leia.questionInt("Digite o numero da operacao: "); 
        switch(codigoFila){
            case 1:
                fila.enqueue(leia.question("Digite um nome: "))
                numeroPessoas = fila.count(); 
                break;
            case 2:
                if(numeroPessoas > 0){
                    console.log("Fila de pessoas:\n");
                    fila.printQueue();
                }else{
                    console.log("A fila está vazia!");
                }
                break;
            case 3:
                if(numeroPessoas > 0){
                    fila.dequeue();
                    fila.printQueue();
                    console.log("Cliente chamado(a)!");
                    }else{
                        console.log("A fila está vazia, nao ha ninguem para retirar!");
                    }
                break;
            case 0:
                numPare = 0;
                console.log("Programa finalizado!");
                break;
            default:
                console.log("Insira uma opção válida!");
                break;
        }
}
