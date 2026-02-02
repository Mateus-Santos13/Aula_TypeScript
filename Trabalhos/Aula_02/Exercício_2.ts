//Exercício 2 - Escreva um programa contendo uma Collection Stack (pilha) de Objetos string, 
// para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
//1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
//2: Listar todos os livros da pilha
//3: Retirar um livro da pilha 
//0: O programa deve ser finalizado. 
//Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.



import leia from "readline-sync";
import { Stack } from "./Stack";

let codigopilha; 
const pilha = new Stack<string>();

console.log("*************************************");
console.log("\n   1 - Adicionar livros na pilha   ");
console.log("   2 - Listar todos os livros        ");
console.log("   3 - Retirar livro da pilha        ");
console.log("   0 - Sair                        \n");
console.log("*************************************");



let numPare = 1;
let numeroLivros = 0;




while(numPare > 0){
        codigopilha = leia.questionInt("Digite o numero da operacao: "); 
        switch(codigopilha){
            case 1:
                pilha.push(leia.question("Digite o nome de um livro: "));
                numeroLivros = pilha.count();
                console.log("Livro adicionado!\n"); 
                pilha.printStack();
                break;
            case 2:
                if(numeroLivros > 0){
                    console.log("Lista de livros na pilha: \n");
                    pilha.printStack();
                }else{
                    console.log("A pilha de livros está vazia!");
                }
                break;
            case 3:
                if(numeroLivros > 0){
                    pilha.pop();
                    pilha.printStack();
                    console.log("Um livro foi retirado da pilha!");
                    }else{
                        console.log("A pilha está vazia, nao ha nenhum livro para retirar!");
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
