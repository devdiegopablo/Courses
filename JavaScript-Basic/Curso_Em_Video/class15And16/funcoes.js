let number = 10;


function verifyNumberIsEven(x){
  return x%2==0;
}

if(verifyNumberIsEven(number)){
  console.log(`O número ${number} é par.`);
}else{
  console.log(`O número ${number} é impar`);
}