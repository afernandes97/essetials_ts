
//heranca - é a capacidade que uma classe tem de herdar, atributos e metodos de outra classe




//definindo a criacao da classe Veiculo (MOLDE) - que nao é o objeto em si
//quando exportamos como default temos que importar fora das {}
//o default define a parte principal a ser exportada
//assim podemos importar mais partes dentro das {} caso necessario
export default class Veiculo {
    //private estamos modificando a visibilidade do atributo
    //protected é semelhante ao private, a diferenca é que ele permite
    //classes filhas fazerem alteracoes
    protected modelo:string ="";
    protected velocidade:number = 0;


    //definicao dos metodos - que sao funcoes ou comportamentos no mundo real
    //void é quando definimos a funcao para fazer um processamento e n precisa um retorno
    public acelerar(): void{
        //this da acesso a itens do escopo da classe, fora do escopo atual
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void{
        this.velocidade = 0;
    }
    
    public velocidadeAtual(): number{
        return this.velocidade;
    }
}