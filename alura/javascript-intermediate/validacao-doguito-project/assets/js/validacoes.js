export function validar(input){
 const tipoDeInput = input.dataset.tipo; //If you want to access a data attribute, you must use ".dataset" and the name of the data attribute set from HTML. Ex: "data-tipo" will be ".dataset.tipo".
 
 if(validadores[tipoDeInput]){ //It verifies if there's "tipoDeInput" inside of "validadores".
  validadores[tipoDeInput](input);
 }
 
 if(input.validity.valid){ //It verifies if the validity from field is true or false
  input.parentElement.classList.remove('input-container--invalido'); //it removes the class 'input-container--invalido'
  input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';//It deletes the <span> massage.
 }else{
  input.parentElement.classList.add('input-container--invalido');//it adds the class 'input-container--invalido'
  input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostarMensagemErro(tipoDeInput, input); //It replaces the <span>  default message with the custom one by calling a function.
 }

}

const tiposDeErro = ['valueMissing','typeMismatch','patternMismatch','customError']; //Array with types of error

const mensagensDeErro = { //An object with objects named mensagensDeErro.
  nome: {
    valueMissing: 'O campo nome não pode estar vazio!'
  },
  email: {
    valueMissing: 'O campo email não pode estar vazio!',
    typeMismatch: 'O email digitado não é válido!'
  },
  senha: {
    valueMissing: 'O campo senha não pode estar vazio!',
    patternMismatch: 'A senha deve ter de 6 a 12 caracteres, no mínimo 1 maiúscula e minúscula, pelo menos 1 número e sem símbolos.'
  },
  dataNascimento: {
    valueMissing: 'O campo data de nascimento não pode estar vazio!',
    customError: 'Você precisa ter mais que 18 anos para se cadastrar!'
  },
  cpf: {
    valueMissing: 'O campo do CPF não pode estar vazio!',
    customError: 'O cpf digitado não é válido'
  },
  cep: {
    valueMissing: 'O campo CEP não pode estar vazio!',
    patternMismatch: 'O CEP digitado não é válido',
    customError: 'CEP inválido! Digite um CEP válido.'
  },
  preco: {
    valueMissing: 'O campo preço não pode estar vazio!'
  }
}

const validadores = { //An object named validadores.
  dataNascimento:input => validarDataNascimento(input), //It calls the function "validarDataNascimento" passing as a parameter an object named input whose values was inherited from "validadores[tipoDeInput](input);".
  cpf:input => validarCpf(input),
  cep: input => buscarCep(input)
}

function mostarMensagemErro(tipoDeInput, input){
  let mensagem = '';

  if(input.validity.valueMissing){//It verifies if the valueMissing error is true. 
    mensagem = mensagensDeErro[tipoDeInput]['valueMissing'];
  }else{
    tiposDeErro.forEach(erro=>{ //It verifies if any other errors inside of array "tiposDeErro" is true
      if(input.validity[erro] && !input.validity.valueMissing){
        mensagem = mensagensDeErro[tipoDeInput][erro];
      }
    });
  }

  return mensagem;
}

//Validity verification for birthday and it's over 18 years old
function validarDataNascimento(input){
  const dataRecebida = new Date(input.value);
  let mensagem = '';
  
  if(!checarMaioridade(dataRecebida)){ //The variable receives the message if it's not 18 years old or above.
    mensagem = 'Você precisa ter mais que 18 anos para se cadastrar!';
  }

  input.setCustomValidity(mensagem);//It verifies if the parameter is null or not. In case it's null, the function validates the input, else it blocks the form and shows the error message.
}

function checarMaioridade(data){
  const dataAtual = new Date(); //It get the date from your PC. If there's no parameter, it gets the current date.
  const dataMaioridade = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate());
  return  dataMaioridade <= dataAtual;
}

//Validity verification for ID structure
function validarCpf(input){
  const cpfFormatado = input.value.replace(/\D/g, ''); //It removes everything it's not a number
  let mensagem = '';

  if(!checarNumerosRepetidos(cpfFormatado) || !checaEstruturaCpf(cpfFormatado) || cpfFormatado.length!=11){
    mensagem = 'O cpf digitado não é válido';
  }

  input.setCustomValidity(mensagem);
}

function checarNumerosRepetidos(cpf){
  const cpfNumerosRepetidos = [
    11111111111,
    22222222222,
    33333333333,
    44444444444,
    55555555555,
    66666666666,
    77777777777,
    88888888888,
    99999999999
  ];
  let cpfValido = true;

  cpfNumerosRepetidos.forEach(valor=>{
    if(valor == cpf){
      cpfValido = false;
    }
  });

  return cpfValido;

}

function checaEstruturaCpf(cpf){
  let multiplicador = 10;
  return checaDigitoVerificador(cpf, multiplicador);
}

function checaDigitoVerificador(cpf, multiplicador){
  if(multiplicador>=12){
    return true;
  }

  let multiplicadorCopia = multiplicador;
  let soma = 0;
  const cpfSemDigito = cpf.substr(0, multiplicador-1).split('');
  const digitoCpf = cpf.charAt(multiplicador-1);

  for(let contador = 0; multiplicadorCopia>1; multiplicadorCopia--){
    soma = soma + cpfSemDigito[contador]*multiplicadorCopia;
    contador++;
  }

  if(digitoCpf == confirmaDigito(soma)){
    return checaDigitoVerificador(cpf, multiplicador+1);
  }

  return false;
}

function confirmaDigito(soma){
  const restoDaDivisao = soma%11;
  if(restoDaDivisao>=2){
    return 11 - (restoDaDivisao);
  }else{
    return 0;
  }
}
//Searching CEP by API and filling CEP fields
function buscarCep(input){
  const cepFormatado = input.value.replace(/\D/g, '');
  const url = `https://viacep.com.br/ws/${cepFormatado}/json/`;
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=utf-8' 
    }
  }

  if(!input.validity.patternMismatch && !input.validity.valueMissing){
    fetch(url, options)
    .then(response => response.json())
    .then(data=>{
      if(data.erro){
        input.setCustomValidity('CEP inválido! Digite novamente um CEP válido.');
        return;
      }else{
        input.setCustomValidity('');
        preencherCepCampos(data);
      }

    });
  }
}

function preencherCepCampos(data){
  const logradouro = document.querySelector('#logradouro');
  const cidade = document.querySelector('#cidade');
  const estado = document.querySelector('#estado');

  logradouro.value = data.logradouro;
  cidade.value = data.localidade;
  estado.value = data.uf;
}