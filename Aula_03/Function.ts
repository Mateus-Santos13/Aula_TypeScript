//Aula sobre funções no typescript.
//readline sync
// @readline-sync
// @types/readline-sync

//Exemplo de calculadora com funções.
import leia from "readline-sync";

let opcao: number;
let num1: number;
let num2: number;

do{
console.log("*************************");
console.log("1 - Soma");
console.log("2 - Subtrai");
console.log("3 - Multiplica");
console.log("4 - Divide");
console.log("0 - Sair");
console.log("*************************");

opcao = leia.questionInt("Digite uma opcao: ");
//num1 = leia.questionFloat("Digite o primeiro numero: ");
//num2 = leia.questionFloat("Digite o segundo numero: ");

if(opcao === 0){
    sobre();
    process.exit(0);
}

switch(opcao){
    case 1: 
        [num1, num2] = obterNumeros();
        console.log(soma(num1, num2));
        break;
    case 2:
        [num1, num2] = obterNumeros();
        console.log(subtrai(num1, num2));
        break;
    case 3: 
        [num1, num2] = obterNumeros();
        console.log(multiplica(num1, num2));
        break;
    case 4:
        [num1, num2] = obterNumeros();
        console.log(divide(num1, num2));
        break;
    default:
        console.log("Escolha uma opcao valida");
}
}while(true);

function obterNumeros(): [number, number]{
    const num1 = leia.questionFloat("Digite o primeiro numero: ");
    const num2 = leia.questionFloat("Digite o segundo numero: ");
    return[num1, num2];
}

function soma(num1: number, num2: number): number{
    return num1 + num2;
}

function subtrai(num1: number, num2: number): number{
    return num1 - num2;
}

function multiplica(num1: number, num2: number): number{
    return num1 * num2;
}

function divide(num1: number, num2: number): number{
    return num1 / num2; 
}

function sobre() :void{
    console.log("Programa desenvolvido por Mateus Santos");
}