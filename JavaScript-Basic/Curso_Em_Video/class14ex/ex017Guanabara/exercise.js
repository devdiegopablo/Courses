const numTxt = document.getElementById('txtn');
const tabuada = document.getElementById('seletab');
function gerarTabuada(){
  let counter = 1;
  if(numTxt.value.length == 0){
    alert('[ERRO] Digite um número por favor.');
  }else{
    const number = Number(numTxt.value);
    tabuada.innerHTML = '';
    while(counter<=10){
      const item = document.createElement('option'); //Cria um option dentro da tag select no HTML
      item.text = `${number} x ${counter} = ${number*counter}`;//Gera o texto no elemento option criado anteriormente
      item.value = `tab${counter}`; //Adiciona o atributo value no elemento option que posuui mais utilidades em outras linguagens como PHP
      tabuada.appendChild(item); //Similar ao img (olhar o ex015) adiciona um elemento filho no documento HTML
      counter++;
    }
  }
}