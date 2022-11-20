const dayNow = new Date();
const today = dayNow.getDay(); //Quando chamado ele retorna um número de 0 a 6. Onde 0 é o Domingo e 6 o Sábado
switch(today){
  case 0:
    console.log('Hoje é Domingo');
    break;
  case 1:
    console.log('Hoje é Segunda');
    break;
  case 2:
    console.log('Hoje é Terça');
    break;
  case 3:
    console.log('Hoje é Quarta');
    break;
  case 4:
    console.log('Hoje é Quinta');
    break;
  case 5:
    console.log('Hoje é Sexta');
    break;
  default:
    console.log('Hoje é Sábado');
}