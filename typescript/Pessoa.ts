//definindo a criacao da classe pessoa (molde)

//importando modelo carro
import Carro from './Carro';

export default class Pessoa {

    private nome: string;
    private carroPreferido: string;
    private carro: Carro = new Carro("", 0);

    constructor(nome:string, carroPreferido:string, ){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    //implementando metodos
    public dizerNome(): string{
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void{
        this.carro = carro;
        console.log("quero comprar o carro")
    }

    public dizerCarroQueTem(): Carro{
        return this.carro;
    }
}


