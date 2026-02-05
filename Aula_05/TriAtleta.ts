import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";
//Simulando uma importação de múltiplas classes utilizando interfaces;
export class TriAtleta extends Pessoa implements Ciclista, Corredor, Nadador{
   
    public aquecer(): void {
        console.log("Aquecendo...");
    }
    
    public pedalar(): void {
        // Implementação do método pedalar
        console.log("Pedalando...");
    }
    
    public correr(): void {
        // Implementação do método correr
        console.log("Correndo...");
    }
    
    public nadar(): void {
        // Implementação do método nadar
        console.log("Nadando...");
    }
    
    public cansar(): void {
        // Implementação do método cansar
        console.log("Cansando...");
    }
}