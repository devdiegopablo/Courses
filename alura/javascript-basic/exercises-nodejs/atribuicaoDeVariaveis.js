console.log("Trabalhando com variáveis: atribuições");
//Podemos usar vŕgula para usar duas ou mais variáveis como parâmetro
let nome = "Diego Pablo", contador= 0;
const sobrenome= "Silva Oliveira";
console.log(nome, sobrenome);
//Podemos também fazer uma interpolação da variável dentro do texto
console.log(`Meu nome é ${nome} ${sobrenome}`);
//Sobreescrita do valor da varável 
console.log("Valor original:");
console.log(contador);
contador = contador + 1;
console.log("Valor sobreescrito:");
console.log(contador);
//Saiba descrever bem a variável pelo seu nome sem desrepeitar as convenções
const nomeCompleto =  nome+" "+sobrenome;
console.log(`Oi ${nome} seu nome completo é ${nomeCompleto}`);