let idade = 65;
if(idade<16){
  console.log('Não pode votar');
}else if(idade<18 || idade>=65){
  console.log('O voto é opcional');
}else{
  console.log('Você pode votar e é obrigatório');
}