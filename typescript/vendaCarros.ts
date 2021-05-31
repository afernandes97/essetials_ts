// PROGRAMACAO ORIENTADA A OBJETOS COM TS

//importando os modulos das classes
import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';

// Criacao dos carros
let carroA = new Carro("ford ka", 4)
let carroB = new Carro("Gol quadrado", 4)
let carroC = new Carro("Camaro", 4)



//criando array que vai conter a lista de carros da concessionaria
//fazendo uma inferencia de tipos, falando q possui uma array com uma referencia de carros
let listaDeCarros: Array<Carro> = [carroA,carroB,carroC];


//atribuindo array ao atributo lista de carros que pertence a concessionaria
let concessionaria = new Concessionaria("av paulista", listaDeCarros);


//exibir lista de carros disponiveis na concessionaria
console.log(concessionaria.mostrarListaDeCarros( ));




//instanciando objeto pessoa e fazendo com que a mesma compre um carro da concessionaria

let cliente = new Pessoa("André", "ford ka" );

//solicitando a nova instancia do objeto cliente executando o metodo dizer carro preferido
console.log("O cliente",cliente.dizerNome(),"Tem Preferencia por um", cliente.dizerCarroPreferido());



//verificando se na lista de carros da concessionaria existe o carro fornecido como preferido pelo cliente

//utilizando o map para verifcar dentro do array os objetos contidos e assim podendo manipular e fazer diversas alteracoes com o mesmo
//fazendo um loop dentro de cada uma das posicoes do array
//assim podemos recuperar o valor e fazer uma determinada acao
//nao estamos mais trabalhando com a variavel array em si, mas sim com o objeto em si gerado a partir do molde
concessionaria.mostrarListaDeCarros().map((carro: Carro)=>{
    //fazendo uma comparacao na lista de carro e verificando se o modelo do carro possui dentro do carro
    //preferido informado pelo cliente    
    if (carro['modelo'] == cliente.dizerCarroPreferido()){
        //caso true , executamos a funcao comprar carro
        //passando o carro que queremos comprar
        cliente.comprarCarro(carro);
    }

})




