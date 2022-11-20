//A recursive function calls itself inside of it
function recursiveFactorial(number){
  if(number == 1){
    return number;
  }else{
    return number*recursiveFactorial(number-1);
  }
}

console.log(recursiveFactorial(5));