"use strict";
// PROGRAMACAO ORIENTADA A OBJETOS COM TS
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando os modulos das classes
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
// Criacao dos carros
var carroA = new Carro_1.default("ford ka", 4);
var carroB = new Carro_1.default("Gol quadrado", 4);
var carroC = new Carro_1.default("Camaro", 4);
//criando array que vai conter a lista de carros da concessionaria
//fazendo uma inferencia de tipos, falando q possui uma array com uma referencia de carros
var listaDeCarros = [carroA, carroB, carroC];
//atribuindo array ao atributo lista de carros que pertence a concessionaria
var concessionaria = new Concessionaria_1.default("av paulista", listaDeCarros);
//exibir lista de carros disponiveis na concessionaria
console.log(concessionaria.mostrarListaDeCarros());
//instanciando objeto pessoa e fazendo com que a mesma compre um carro da concessionaria
var cliente = new Pessoa_1.default("André", "ford ka");
//solicitando a nova instancia do objeto cliente executando o metodo dizer carro preferido
console.log("O cliente", cliente.dizerNome(), "Tem Preferencia por um", cliente.dizerCarroPreferido());
//verificando se na lista de carros da concessionaria existe o carro fornecido como preferido pelo cliente
//utilizando o map para verifcar dentro do array os objetos contidos e assim podendo manipular e fazer diversas alteracoes com o mesmo
//fazendo um loop dentro de cada uma das posicoes do array
//assim podemos recuperar o valor e fazer uma determinada acao
//nao estamos mais trabalhando com a variavel array em si, mas sim com o objeto em si gerado a partir do molde
concessionaria.mostrarListaDeCarros().map(function (carro) {
    //fazendo uma comparacao na lista de carro e verificando se o modelo do carro possui dentro do carro
    //preferido informado pelo cliente    
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //caso true , executamos a funcao comprar carro
        //passando o carro que queremos comprar
        cliente.comprarCarro(carro);
    }
});
