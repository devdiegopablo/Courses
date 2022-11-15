console.log("Estruturas condicionais em JS");

const lugares=["Salvador","São Paulo","Pernambuco" ,"Rio de Janeiro"], destinoSelecionado="Salvador";
const idade = 25, maioridade= 18, acompanhadaPelosPais=false;
let passagemComprada = false, contador= 0, destinoDisponivel=false;

console.log(`Os destinos disponíveis são: 1- ${lugares[0]}, 2- ${lugares[1]}, 3- ${lugares[2]} e 4- ${lugares[3]} `);
console.log(`O destino selecionado foi: ${destinoSelecionado}`);

//estrutura de repetição while
// while(contador<=3){
//     if(destinoSelecionado==lugares[contador]){
//         destinoDisponivel = true;
//         break;
//     }
//     contador++;
// }

//estrutura de repetição for
for(contador=0; contador<4;contador++){
    if(destinoSelecionado==lugares[contador]){
        destinoDisponivel = true;
        break;
    }
}

//Operadores lógicos em JS: && é  and, || é  or, >  é maior, < é menor, >= é maior ou igual, <= é menor ou igual
if(destinoDisponivel){
    if(idade>=maioridade || acompanhadaPelosPais){
        lugares.splice(2,1); //a contagem da posição no array começa do 0 e não do 1
        console.log("Obrigado pela compra\n");
        console.log(`Os destinos disponíveis agora são: 1- ${lugares[0]}, 2- ${lugares[1]} e 3- ${lugares[2]} \n`);
        passagemComprada = true;
    }else {
        console.log("Infelizmente não posso fazer a venda, pois você é de menor sem acompanhamento dos pais.");
    }
}else{
    console.log(`${destinoSelecionado} está indisponível.`);
}
console.log("Embarcando: \n");

if(idade>=maioridade && passagemComprada){
    console.log("Boa viagem!");
}else if(acompanhadaPelosPais && passagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Lamento, mas não pode embarcar .");
}
