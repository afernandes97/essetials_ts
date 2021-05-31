import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Moto from './moto';

let carro = new Carro('veloster',3);
carro.acelerar()
carro.acelerar()

let moto = new Moto('Kavasaki');
moto.acelerar()
moto.acelerar()

console.log(moto)
console.log(carro)

let concessionaria = new Concessionaria('', []);

console.log(concessionaria.fornecerHorariosDeFuncionamento());