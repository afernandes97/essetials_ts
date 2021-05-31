"use strict";
// VENDO COMO FUNCIONA O TRANSPALING
var ola = function (nome, sobreNome) {
    console.log("ola " + nome + " " + sobreNome);
};
ola("andre", "fernandes");
var dobroDoNumeroMaisNumeroAtribuido = function (numero, numeroAtribuido) {
    return numero + numeroAtribuido * 2;
};
console.log(dobroDoNumeroMaisNumeroAtribuido(10, 10));
var entrar = function (login, serialKey) {
    var loginAuth = "afernandes";
    var serialAuth = "aa222";
    if (login === loginAuth && serialKey === serialAuth) {
        console.log("Bem Vindo " + login);
    }
    else if (login != loginAuth) {
        console.log("Login Incorreto");
    }
    else if (serialKey != serialAuth) {
        console.log("SerialAuth Incorreto");
    }
    ;
};
entrar("afernandes", "aa222");
var consultarNota = function (nome, notaFinal) {
    var notaDeCorte = 7;
    if (notaFinal == +notaDeCorte) {
        console.log("Parabens " + nome + " " + "Voce Passou de semestre com a nota: " + notaFinal);
    }
    else if (notaFinal < notaDeCorte) {
        console.log("Infelizmente " + nome + " " + "Voce nao foi aprovado, sua nota foi: " + notaFinal);
    }
};
consultarNota("Andre Fernandes", 6);
var quizMatematico = function (respostaUm, respostaDois, respostaTres, respostaQuatro) {
    var perguntaUm = "Qual a soma de 20 + 5";
    var respostaValidaUm = "25";
    var perguntaDois = "Qual a subtracao de 200 - 5";
    var respostaValidaDois = "195";
    var perguntaTres = "Qual a soma de 200 + 15";
    var respostaValidaTres = "215";
    var perguntaQuatro = "Qual a divisao de 20 / 2";
    var respostaValidaQuatro = "10";
    console.log(perguntaUm);
    console.log(perguntaDois);
    console.log(perguntaTres);
    console.log(perguntaQuatro);
    if (respostaValidaUm == respostaUm) {
        console.log("acertou");
    }
    else {
        console.log("errou");
    }
    if (respostaValidaDois == respostaDois) {
        console.log("acertou");
    }
    else {
        console.log("errou");
    }
    if (respostaValidaTres == respostaTres) {
        console.log("acertou");
    }
    else {
        console.log("errou");
    }
    if (respostaValidaQuatro == respostaQuatro) {
        console.log("acertou");
    }
    else {
        console.log("errou");
    }
};
quizMatematico("25", "18", "200", "10");
