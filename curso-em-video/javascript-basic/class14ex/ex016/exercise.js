const formInfo1 =  document.getElementsByClassName('txt__num')[0];
const formInfo2 =  document.getElementsByClassName('txt__num')[1];
const formInfo3 =  document.getElementsByClassName('txt__num')[2];
const result = document.querySelector('div.result');

//Function called onclick
function countClick(){
  let verifyGap = Number(formInfo3.value);
  if(formInfo1.value.length == 0){
    result.innerHTML = "Impossível contar sem número inícial";
  }else if(formInfo2.value.length == 0){
    result.innerHTML = "Impossível contar sem número final";
  }else if(formInfo3.value.length == 0 || verifyGap<=0){
    alert("Passo negativo, 0 ou nulo não existe. Então utilizaremos o passo 1");
    verifyGap = 1;
    counting(verifyGap);
  }else{
    counting(verifyGap);
  }
}
function counting(counter){
  let iniNum = Number(formInfo1.value);
  let endNum = Number(formInfo2.value);
  if(iniNum>endNum){
    result.innerHTML = "Counting: ";
    for(iniNum; iniNum>=endNum; iniNum-=counter){
      result.innerHTML += `${iniNum} \u{1F449}`;
    }
    result.innerHTML += `\u{1F3C1}`;
  }else{
    result.innerHTML = "Counting: ";
    for(iniNum; iniNum<=endNum; iniNum+=counter){
      result.innerHTML += `${iniNum} \u{1F449}`;
    }
    result.innerHTML += `\u{1F3C1}`;
  }
}