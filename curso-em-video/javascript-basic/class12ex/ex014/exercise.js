function loadPage(){
  let message = document.querySelector('div.msg');
  let photo = document.querySelector('img.photo');
  let timeNow = new Date();
  let hour = timeNow.getHours();
  message.innerHTML = `Neste momento são ${hour} horas`;
  if(hour>=6 && hour<12){
    photo.src = 'images/morning.jpg';
    document.body.style.backgroundColor = '#547E9A';
  }else if(hour>=12 && hour<18){
    photo.src = 'images/afternoon.jpg';
    document.body.style.backgroundColor = '#A76351';
  }else{
    photo.src = 'images/night.jpg';
    document.body.style.backgroundColor = '#1A363C';
  }
}
