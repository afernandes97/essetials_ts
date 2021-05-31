"use strict";
//definindo a criacao da classe concessionaria (molde)
Object.defineProperty(exports, "__esModule", { value: true });
//utilizamos o implements para avisar q a class concessionaria ira implementar
//a interface da concessionariaInterface
var Concessionaria = /** @class */ (function () {
    //recebendo parametro lista de carros no contrutor para que possa ser construido
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    //implementando metodos
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    //recuperando objeto do tipo array carro
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    //recuperamos o metodo obrigatorio pela interface - ConcessionariaInterface
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'De seg. a sexta das 9h as 18h';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
