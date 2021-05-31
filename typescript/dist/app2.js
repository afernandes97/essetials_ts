"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var moto_1 = __importDefault(require("./moto"));
var carro = new Carro_1.default('veloster', 3);
carro.acelerar();
carro.acelerar();
var moto = new moto_1.default('Kavasaki');
moto.acelerar();
moto.acelerar();
console.log(moto);
console.log(carro);
var concessionaria = new Concessionaria_1.default('', []);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
