"use strict";
//definindo a criacao da classe pessoa (molde)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando modelo carro
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.carro = new Carro_1.default("", 0);
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    //implementando metodos
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
        console.log("quero comprar o carro");
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
