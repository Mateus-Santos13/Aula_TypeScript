export abstract class Pessoa{
    private _nome: string;
    
    constructor(nome: string){
        this._nome = nome;
    }

	public get nome(): string {
		return this._nome;
	}

	public set nome(nome: string) {
		this._nome = nome;
	}

    public visualizar(){
        console.log(`Nome: ${this._nome}`);
    }

    public abstract cansar(): void;
}