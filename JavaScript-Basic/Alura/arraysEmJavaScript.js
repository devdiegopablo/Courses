console.log("Trabalhando com arrays em JS");
const salvador="Salvador", saoPaulo= "São Paulo",  pernambuco="Pernambuco" , rioDeJaneiro="Rio de Janeiro";
//Primeira forma e simples de criar um array
const lugares=[salvador,saoPaulo,pernambuco,rioDeJaneiro];
console.log(`Os destinos disponíveis são: ${lugares}`);
//Segunda forma utilizando uma função
const listaDeLugares = new Array(salvador,saoPaulo,pernambuco,rioDeJaneiro);
console.log(`Os destinos disponíveis são: ${listaDeLugares}`);
//Utilizando o push para adicionar um item no final da lista
lugares.push("Paraiba");
console.log(`Os destinos disponíveis são: ${lugares}`);
//O splice faz o oposto do push, porém temos que definir a posição inicial no array e a quantidade de elementos para remoção
listaDeLugares.splice(0,1); //a contagem da posição no array começa do 0 e não do 1
console.log(`Os destinos disponíveis são: ${listaDeLugares}`);
//Para mostrar o valor de um item na lista, você o valor pela posiçã dele no array
console.log(`Destino selecionado: ${lugares[2]}`);