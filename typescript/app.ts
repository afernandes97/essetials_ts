// VENDO COMO FUNCIONA O TRANSPALING
let ola = (nome:string, sobreNome:string) => {
    console.log("ola " + nome + " " + sobreNome);
}

ola("andre", "fernandes");

let dobroDoNumeroMaisNumeroAtribuido = (numero:number, numeroAtribuido:number) => {
    return numero + numeroAtribuido * 2 
}

console.log(dobroDoNumeroMaisNumeroAtribuido(10, 10));


let entrar = (login:string, serialKey:string) => {
    const loginAuth = "afernandes";
    const serialAuth = "aa222"
    if(login === loginAuth && serialKey === serialAuth){
        console.log("Bem Vindo " + login)
    }
    else if (login != loginAuth)
        {
            console.log("Login Incorreto")
        }
        else if(serialKey != serialAuth){
            console.log("SerialAuth Incorreto");
        };
}


entrar("afernandes","aa222");


let consultarNota = (nome:string,notaFinal:number) => {
    const notaDeCorte = 7;

    if(notaFinal ==+ notaDeCorte){
        console.log("Parabens " + nome + " " + "Voce Passou de semestre com a nota: " + notaFinal);
    }else if(notaFinal < notaDeCorte){
        console.log("Infelizmente " + nome + " " + "Voce nao foi aprovado, sua nota foi: " + notaFinal);
    }
}

consultarNota("Andre Fernandes", 6);

let quizMatematico = (respostaUm:string,respostaDois:string,respostaTres:string,respostaQuatro:string) => {
    const perguntaUm = "Qual a soma de 20 + 5";
    const respostaValidaUm = "25";
    const perguntaDois = "Qual a subtracao de 200 - 5";
    const respostaValidaDois = "195";
    const perguntaTres = "Qual a soma de 200 + 15";
    const respostaValidaTres = "215";
    const perguntaQuatro = "Qual a divisao de 20 / 2";
    const respostaValidaQuatro = "10";

    console.log(perguntaUm);
    console.log(perguntaDois);
    console.log(perguntaTres);
    console.log(perguntaQuatro);



    if(respostaValidaUm == respostaUm){
        console.log("acertou")
    }else{
        console.log("errou")
    }

    if(respostaValidaDois == respostaDois){
        console.log("acertou")
    }else{
        console.log("errou")
    }

    if(respostaValidaTres == respostaTres){
        console.log("acertou")
    }else{
        console.log("errou")
    }

    if(respostaValidaQuatro == respostaQuatro){
        console.log("acertou")
    }else{
        console.log("errou")
    }

}

quizMatematico("25","18","200","10");