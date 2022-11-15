const timeNow = new Date(); //Quando chamado como função, ele retorna uma string de hora e data 
const hour = timeNow.getHours(); //Ele capta a hora do sistema que ele é executado.
console.log(`A hora atual é ${hour} horas.`);
if(hour>=6 && hour<12){
  console.log('Good morning!');
}else if(hour>=12 && hour<18){
  console.log('Good afternoon!');
}else if(hour>=18 && hour<=23){
  console.log('Good evening!');
}else{
  console.log('You need to sleep!');
}