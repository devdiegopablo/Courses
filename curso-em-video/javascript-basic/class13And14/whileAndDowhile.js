//Learning while and do-while structures
let counter=1;
while(counter<=6){ //O teste aqui é executado logo no início. Assim o comando dentro do laço só será executado se a condição for verdadeira.
  console.log('Are you ok?');
  counter++;
}
counter=1;
do{
  console.log("I'm fine");
  counter++; // Nunca esqueça o incremento ou terá um laço infinito.
}while(counter<=6); //Neste caso o teste é executado no final, ou seja, o comando dentro do bloco é executado pelo menos uma vez.