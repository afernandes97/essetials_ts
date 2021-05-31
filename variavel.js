//definindo uma variavel tipo var no escopo global
var serie = 'Friends';

/* criando um escopo de bloco chamando a variavel serie do escopo global e 
redefinindo o valor
 - dentro do bloco temos acesso a uma variavel global
 o var sofre uma elevação de escopo, por exemplo se dentro do escopo if
redefinirmos para serie2 e dar um console log no escopo global,
ele trara o resultado */
if(true){
    serie = 'Game Of Thrones';
}

//--------console.log(serie);

// -----Let-----

//definindo a variavel como let, ele assume somente o bloco onde foi definida

//definindo uma variavel no escopo global
var serie2 = ' Frinds2'

if(true){
    //definindo a variavel serie3 como let, onde a mesma nao sofrera elevação
    let serie3 = 'um maluco no pedaco'
}

/* se executarmos o console log no escopo global tentando trazer a serie3 que
pertence ao bloco if, ele trara um erro falando que a variavel nao foi encontrada
pois a mesma esta em um escopo diferente
isso ocorre para qualquer interacao com a variavel let que nao pertenca ao mesmo
escopo */

//-------console.log(serie3);



// -----CONST-----

/* define uma variavel como constante, a mesma nao podera ser modificada apos a sua
criação */

//definindo a variavel como const - ou seja a mesma nao podera sofrer alteracao
const filme = 'Aquaman';

//tentando fazer uma alteracao direta a variavel const filme - o mesmo trara um erro
filme = 'SuperMan';

//--------console.log(filme);     



