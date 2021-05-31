
//importando a classe veiculo para telo como pai
import Veiculo from './veiculo'

//definindo a criacao da classe carro (MOLDE) - que nao é o objeto em si
//quando exportamos como default temos que importar fora das {}
//o default define a parte principal a ser exportada
//assim podemos importar mais partes dentro das {} caso necessario

//fazendo um extends (para extender) a classe veiculo
export default class Carro extends Veiculo{
    //private estamos modificando a visibilidade do atributo
    private numeroDePortas:number;

    //recebe os parametros no momento de instanciar a classe
    constructor(modelo:string, numeroDePortas:number){
        //o super ajusta o contexto para mostrar que é referente ao pai
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}