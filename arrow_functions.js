//-----ARROW FUNCTION-----

//é uma forma mais resumida de escrever uma funcão



//definindo funcao da forma tradicional - ES5

//definindo uma variavel que recebe uma funcao, na funcao é definido um numero
//como parametro e retornando o dobro dele
var dobroDoValor = function(numero){
    //retornando numero e multiplicando por 2
    return numero * 2;
}
//no console log definimos o valor apos a atribuicao da variavel - a mesma na funcao
//solicita a definicao de um numero
console.log(dobroDoValor(10));




// REFATORANDO PARA ARROW FUNCTION

//definindo uma nova variavel para ultilizar a arrowfunction

//como so tem um parametro definido(numero) nao precisamos colocar em ()
//o paranteses e necessario caso tenha dois ou mais valores ou nenhum
var novoDobroDoValor = numero => {
    //como a funcao é simples podemos retornar a equacao direto, sem
    //declarar o return
    numero * 2;
}

console.log(novoDobroDoValor(10));