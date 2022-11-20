const formNumber = document.getElementById('numTxt');
const table = document.querySelector('textarea#text-box');

function generateTable(){
  const number = Number(formNumber.value);
  if(formNumber.value.length==0){
    table.innerHTML = 'Type a number first...';
  }else{
    table.innerHTML = '';
    for(let count = 1; count<=10; count++){
      table.innerHTML += `${number} x ${count} = ${number*count}\n`;
    }
  }
  

}