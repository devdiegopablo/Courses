console.log("Operações Aritmétricas e conversões de tipo");

//Multiplica primeiro e soma depois
console.log(10 + 8 * 2);
//Soma primeiro e multiplica depois
console.log((10 + 8) *2);
//Exemplo de concatenção texto com número
console.log("Ano " + 2022);
// Agora texto com texto
console.log("20" + "22");
//Conversão de texto para número inteiro
console.log(parseInt("10") + parseInt("5"));
//Caso operadores aritmétricos sejam -, * ou / o JavaScript vai tentar converter o texto para número
console.log("15" / "3");
//Contudo se essa conversão não der certo ele retorna NaN (Not a Number)
console.log("diego" * "5");