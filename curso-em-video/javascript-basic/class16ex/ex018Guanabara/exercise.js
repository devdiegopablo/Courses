let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(numero){
  if(Number(numero)>=1 && Number(numero) <=100){
    return true;
  }else{
    return false;
  }
}

function inLista(numero, lista){
  if(lista.indexOf(Number(numero)) != -1){
    return true;
  }else{
    return false;
  }
}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adcionado`;
    lista.appendChild(item);
    res.innerHTML ='';
  }else{
    alert('Valor inválido ou já consta na lista');
  }
  num.value = '';
  num.focus();
}

function finalizar(){
  if(valores.length==0){
    alert('Adicione valores antes de finalizar!');
  }else{
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for(let index in valores){
      soma += valores[index];
      if(valores[index]>maior){
        maior = valores[index];
      }
      if(valores[index]<menor){
        menor = valores[index];
      }
    }
    media = soma/total;
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
    res.innerHTML += `<p>A soma de todos os valores foi ${soma}</p>`;
    res.innerHTML += `<p>A média dos valores informados foi ${media}</p>`;
  }
}