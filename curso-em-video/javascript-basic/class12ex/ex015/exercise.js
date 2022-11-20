let yearText = document.querySelector('input#dat-nasc');
let resultHtml = document.querySelector('div#result');
function verifyPerson(){
  let yearNow = new Date();
  let currentYear = yearNow.getFullYear();
  let yearInformed = Number(yearText.value);
  let currentAge = currentYear - yearInformed;
  let genreForm = document.getElementsByName('gene-rad');
  let genreInformed = '';
  let picture = document.createElement('img');
  picture.setAttribute('id', 'photo');
  if(yearInformed == 0 || yearInformed>= currentYear){
    alert('[ERRO] Verifique se seus dados estão corretos!');
  }else{
    if(genreForm[0].checked){
      if(currentAge>0 && currentAge<=10){
        genreInformed = 'Menino';
        picture.setAttribute('src', 'images/foto-bebe-m.png');
      }else if(currentAge<18){
        genreInformed = 'Jovem';
        picture.setAttribute('src', 'images/foto-jovem-m.png');
      }else if(currentAge<50){
        genreInformed = 'Homem';
        picture.setAttribute('src', 'images/foto-adulto-m.png');
      }else{
        genreInformed = 'Senhor';
        picture.setAttribute('src', 'images/foto-idoso-m.png');
      }
    }else{
      if(currentAge>0 && currentAge<=10){
        genreInformed = 'Menina';
        picture.setAttribute('src', 'images/foto-bebe-f.png');
      }else if(currentAge<18){
        genreInformed = 'Jovem';
        picture.setAttribute('src', 'images/foto-jovem-f.png');
      }else if(currentAge<60){
        genreInformed = 'Mulher';
        picture.setAttribute('src', 'images/foto-adulto-f.png');
      }else{
        genreInformed = 'Senhora';
        picture.setAttribute('src', 'images/foto-idoso-f.png');
      }
    }
    resultHtml.style.textAlign = 'center';
    resultHtml.innerHTML = `<p>Foi detectado(a) ${genreInformed} com ${currentAge}</p>`;
    resultHtml.appendChild(picture);
  }

}