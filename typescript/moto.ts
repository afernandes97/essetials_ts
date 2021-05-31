import Veiculo from './veiculo';


class Moto extends Veiculo {
    constructor(modelo:string){
        super()
        this.modelo = modelo
    }
    
    //moto quando instanciado ja recebera os atributos e metodos de veiculo
    public acelerar(): void{
        //this da acesso a itens do escopo da classe, fora do escopo atual
        this.velocidade = this.velocidade + 20;
    }
}

export default Moto