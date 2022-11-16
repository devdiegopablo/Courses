//Creating DOM variables
const formNumber = document.getElementById('numTxt');
const table = document.querySelector('textarea#text-box');
const buttonAdd = document.getElementsByClassName('button')[0];
const buttonShow = document.getElementsByClassName('button')[1];
const buttonAnalyze = document.getElementsByClassName('button')[2];
//creating array
const numbersList = [];
//Adding listeners for the HTML buttons
buttonAdd.addEventListener('click', addNumber);
buttonShow.addEventListener('click', showCurrentNumbersList);
buttonAnalyze.addEventListener('click', analyzingNumbers);
//Analyze the numbers on the array
function analyzingNumbers(){
  let analyzedNumbersList = [];
  //It checks if there is any number on the array. 
  if(numbersList.length == 0){ 
    table.innerHTML = "there's no number on the list to analyze.";
  }else{
    //It gets analyzed numbers and returns solutions on the array.
    analyzedNumbersList[0] = gettingMinValueOnList();
    analyzedNumbersList[1] = gettingMaxValueOnList();
    analyzedNumbersList[2] = gettingOverallValueOnList();
    //It shows the obtained results in the text area.
    table.innerHTML = `${numbersList.length} numbers was added on the list.\n`;
    table.innerHTML += `${analyzedNumbersList[0]} is the minimum value.\n`;
    table.innerHTML += `${analyzedNumbersList[1]} is the maximum value.\n`;
    table.innerHTML += `The overall value on the list is ${analyzedNumbersList[2]}.\n`;
    table.innerHTML += `The avarage value on the list is ${analyzedNumbersList[2]/numbersList.length.toFixed(2)}.`;
  }
}
function gettingMinValueOnList(){
  let minValue=numbersList[0];
  for(let index in numbersList){ //This simplified loop structure is used only on arrays.
    if(minValue>numbersList[index]){
      minValue = numbersList[index];
    }
  }
  return minValue;
}

function gettingMaxValueOnList(){
  let maxValue=numbersList[0];
  for(let index in numbersList){
    if(maxValue<numbersList[index]){
      maxValue = numbersList[index];
    }
  }
  return maxValue;
}

function gettingOverallValueOnList(){
  let overallValue=0;
  for(let index in numbersList){
    overallValue += numbersList[index];
  }
  return overallValue;
}

//Show numbers added on the list
function showCurrentNumbersList(){
  //It checks if there is any number on the list
  if(numbersList.length == 0){ 
    table.innerHTML = 'No number was added on the list.';
  }else{
    table.innerHTML = 'My added numbers are: ' + numbersList;
  }
}
//Add a number on the list
function addNumber(){
  //Variables
  const number = Number(formNumber.value);
  //Conditions to add the number informed
  if(formNumber.value.length==0 || number<1 || number>100){
    table.innerHTML = 'Type a number a valid number...';
  }else if(numberIsOnList(number, numbersList)){
    table.innerHTML = 'This number was added to the list.';
  }else{
    table.innerHTML = `number ${number} was added to the list.`;
    numbersList.push(number);
  }
  formNumber.value= ''; //For forms, you use value rather than innerHTML
  formNumber.focus(); //This command put the focus on the chosen element
}
//Check if the informed number is on the list
function numberIsOnList(number, list){
  if(list.indexOf(number) != -1){//If the number is on the array this function return the index postion, else, it returns -1
    return true;
  }else{
    return false;
  }
}
