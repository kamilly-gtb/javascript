//console.log() mostra uma informação no console
console.log("Olá, mundo!");
console.log(6 + "  7");

console.log(typeof "Olá, mundo!");// string
console.log(typeof 17);//number
console.log(typeof 10.5);// number
console.log(typeof true);// boolean
console.log(typeof false);// boolean

// váriavel
//const não pode ter seu valor durante o programo
const nome="kamilly";
console.log(nome);

//let pode ter seu  valor alterado durante o programa
let idade =17;
console.log(idade)

console.log("Olá " + nome + ", que tem " + idade + " anos.");

idade = 18;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`)

//exercicio
const nome1="emanuelly";
console.log(nome)
const nome2= "edneia"

let peso =3
console.log(peso)

console.log (`Olá ${nome1}, que pesa ${peso} kilos.`)


peso=55;
console.log(peso);
 
console.log(`Olá ${nome2}, que pesa ${peso} kilos.`)


//métodos de string

const texto = "jungkook";

//conta quatos caracteres tem a string tem
console.log(texto.length);

//altera todas as letras para maísculo
console.log(texto.toUpperCase());

//altera todas as letras para minúsculo
console.log(texto.toLowerCase())

const nome_completo = "Kamilly Barbosa De Souza"

console.log(nome_completo.includes("Barbosa"))// true

console.log(10 > 5)//true
console.log(10 < 5)//false
console.log(10>= 10)//true(maior ou igual)
console.log(10<= 5)//false
console.log("10" == 10)//true
console.log("10" === 10)//false
console.log(10 !== 5)//true

const idadepessoa= 17

console.log(idadepessoa>= 18)//false
console.log(idadepessoa>=16)//true

 //exercicio2

 const nome_completo2 = "jungkook"

 console.log(nome_completo2 ==("jungkook"))// true
 console.log(nome_completo2 ==("namjoom"))// false

 //coletamos a idade da pessoa
 let pessoaidade = 19

//verificar se a idade é maior ou igual a 18
if(pessoaidade >= 18){
    //se maior ou igual a 18 ela é maior de idade
    console.log("já pode ser preso HAHHAHAHAHAH!!")

}else{

 //senão,ela é menor de idade
 console.log("não vai pra balada! 🫵🤣")
}

//coletamos a idade da pessoa
let idadevotação = 70
//verificar se a idade da pessoa é maior que 70
if(idadevotação > 70){
console.log("você pode mas não é obrigado a votar!")
}else if (idadevotação >= 16){
    
    
    //senão se a idade da pessoa for maior ou igual a 18
    console.log("você tem que votar obrigatoriamente!")
}else if (idadevotação >= 18){

    //senão se a idade da pessoa for maior ou igual a 16
    console.log("você não é obrigado a votar, mas caso queira pode!")
}else{

    //senão for nenhuma das alternativas anteriores
    console.log("você NÃO pode votar!")
}

// 1: aprovação escolar

//coletamos a media da pessoa
let mediaescolar = 10

//verificar se é igual ou maior que 7
if(mediaescolar >= 7){
    console.log("aprovado!")

}else if(mediaescolar >= 8){

//senão se a media da pessoa for maior ou igual a 7
console.log("aprovado!")


}else{
    //senão for maior ou igual a 7
    console.log("reprovado!")
}


//2: comparação de dois números
let numero1 = 13
let numero2 = 12
if (numero1 > numero2){
    console.log("o primeiro numero é maior")
}else if(numero2 > numero1){
    console.log(" O segundo numero é maior")
}else{
    console.log("empate")
}

//receber dois numeros

let numero= 10 + 10
//verificar se é maior,igual ou menor que 10
if(numero >=12){
    console.log(" maior!")

    //senão se os numero forem iguais
}else if (numero === 10 + 10 ){
    console.log("empate!")

}else{
    //senão for maior que 12
    console.log("menor!")
}


// 3: verificação de senha

let senha="senai123"

if(senha === "senai123"){
    console.log("acesso autorizadpo!")

}else{
    console.log("senha incorreta!")
}


// 4: classificação de temperatura


let grau= 22

if(grau <= 18){
    console.log("frio")

}else if (grau >= 27){
    console.log("Quente")
}else{
    console.log("Agradavel")
}

// 5: classificação de nota