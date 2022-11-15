console.log("Estruturas condicionais em JS");

const salvador="Salvador", saoPaulo= "São Paulo",  pernambuco="Pernambuco" , rioDeJaneiro="Rio de Janeiro";

const lugares=[salvador,saoPaulo,pernambuco,rioDeJaneiro];

console.log(`Os destinos disponíveis são: 1- ${lugares[0]}, 2- ${lugares[1]}, 3- ${lugares[2]} e 4- ${lugares[3]} `);

const idade = 25, maioridade= 18, acompanhadaPelosPais=false;
let passagemComprada = false;

//Operadores lógicos em JS: && é  and, || é  or, >  é maior, < é menor, >= é maior ou igual, <= é menor ou igual
if(idade>=maioridade || acompanhadaPelosPais){ 
    console.log(`Destino selecionado: ${lugares[2]}`);
    lugares.splice(2,1); //a contagem da posição no array começa do 0 e não do 1
    console.log("Obrigado pela compra");
    console.log(`Os destinos disponíveis agora são: 1- ${lugares[0]}, 2- ${lugares[1]} e 3- ${lugares[2]} `);
    passagemComprada = true;
}else {
    console.log("Infelizmente não posso fazer a venda, pois você é de menor sem acompanhamento dos pais.");
}

console.log("No embarque: \n");

if(idade>=maioridade && passagemComprada){
    console.log("Boa viagem!");
}else if(acompanhadaPelosPais && passagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Lamento, mas não pode embarcar .");
}
