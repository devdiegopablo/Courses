"use strict"
//Function to play an sound when a button is pressed 
function playAudio(idAudio){
  const element = document.querySelector(idAudio);
  //It verifies if the acquired element is audio.
  if(element!=null && element.tagName==='AUDIO'){
    element.play();
  }else{
    console.log('This is not an audio element');
  }
}

//Getting keyboards elements from HTML
const keyboard = document.querySelectorAll('.tecla');
//A loop iterates with every element on the list and dynamically puts the sound on every key.
for(let counter=0; counter<keyboard.length; counter++){
  const keySelected = keyboard[counter];
  //Getting the second class inside of the object "keyboard"
  const soundSelected = keySelected.classList[1];
  //Getting the audio id using a string template for dynamic texts.
  const audioId = `#som_${soundSelected}`;
  keySelected.onclick = function(){
    playAudio(audioId);
  };
  keySelected.onkeydown = function (event){//"onekeydown" calls an event when a key is pressed
    if(event.code=="Enter" || event.code=="Space"){
      keySelected.classList.add('ativa'); //It adds an class on the selected class list
    }
  };
  keySelected.onkeyup = function (){//"onekeyup" calls an event when a key is released
    keySelected.classList.remove('ativa'); //It removes an class on the selected class list
  };
}