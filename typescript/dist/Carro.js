"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando a classe veiculo para telo como pai
var veiculo_1 = __importDefault(require("./veiculo"));
//definindo a criacao da classe carro (MOLDE) - que nao é o objeto em si
//quando exportamos como default temos que importar fora das {}
//o default define a parte principal a ser exportada
//assim podemos importar mais partes dentro das {} caso necessario
//fazendo um extends (para extender) a classe veiculo
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    //recebe os parametros no momento de instanciar a classe
    function Carro(modelo, numeroDePortas) {
        var _this = 
        //o super ajusta o contexto para mostrar que é referente ao pai
        _super.call(this) || this;
        _this.modelo = modelo;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    return Carro;
}(veiculo_1.default));
exports.default = Carro;
