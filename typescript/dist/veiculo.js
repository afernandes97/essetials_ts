"use strict";
//heranca - é a capacidade que uma classe tem de herdar, atributos e metodos de outra classe
Object.defineProperty(exports, "__esModule", { value: true });
//definindo a criacao da classe Veiculo (MOLDE) - que nao é o objeto em si
//quando exportamos como default temos que importar fora das {}
//o default define a parte principal a ser exportada
//assim podemos importar mais partes dentro das {} caso necessario
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        //private estamos modificando a visibilidade do atributo
        //protected é semelhante ao private, a diferenca é que ele permite
        //classes filhas fazerem alteracoes
        this.modelo = "";
        this.velocidade = 0;
    }
    //definicao dos metodos - que sao funcoes ou comportamentos no mundo real
    //void é quando definimos a funcao para fazer um processamento e n precisa um retorno
    Veiculo.prototype.acelerar = function () {
        //this da acesso a itens do escopo da classe, fora do escopo atual
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
