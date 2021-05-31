//definindo a criacao da classe concessionaria (molde)

//importando modelo carro
import Carro from './Carro';

//importando a interface de concessionaria
import {ConcessionariaInterface} from './ConcessionariaInterface';

//utilizamos o implements para avisar q a class concessionaria ira implementar
//a interface da concessionariaInterface
export default class Concessionaria implements ConcessionariaInterface {
    private endereco:string;
    //quando definimos tipo any - permite que a variavel possa receber qualquer tipo de dado
    //alterado para um array de lista de carro, ja que sabemos o tipo de dado
    private listaDeCarros: Array<Carro>;

    //recebendo parametro lista de carros no contrutor para que possa ser construido
    constructor (endereco:string, listaDeCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }


    //implementando metodos
    public fornecerEndereco() : string {
        return this.endereco;
    }

    //recuperando objeto do tipo array carro
    public mostrarListaDeCarros() : Array<Carro> {
        return this.listaDeCarros;
    }

    //recuperamos o metodo obrigatorio pela interface - ConcessionariaInterface
    public fornecerHorariosDeFuncionamento() : string{
        return 'De seg. a sexta das 9h as 18h'
    }

}


