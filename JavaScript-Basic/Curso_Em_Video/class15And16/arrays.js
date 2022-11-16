let index = 0;
let numbers = [5,3,6]; //Criação do array com os valores 

numbers[3] = 1; //Adicionando um elemento no índice 3 do array
numbers.push(9); //Função que adiciona um elemento na última posição do array 
console.log('Tamanho do array');
console.log(numbers.length); //length é um atributo e por isso não precisa dos () como no push. Ele mostra o tamanho do array
console.log('Array não ordenado');
console.log(numbers);
numbers.sort(); //Função que ordena o array em ordem crescente
console.log('Array ordenado crescentemente');
console.log(numbers);
console.log('Array ordenado decrescentemente');
numbers.sort((a,b) => b-a); //Neste caso usando os parâmetros "(a,b) => b-a" você coloca em ordem descrecente
console.log(numbers);

/*do{
  console.log(`O número ${numbers[index]} está na posição ${index} do meu array`);
  index++;
}while(index<numbers.length);
*/
index = 0;

//Este "for" em JS só funciona em arrays e objects
for(index in numbers){ //Este "for" em JS só funciona em arrays e objects
  console.log(`O valor ${numbers[index]} está na posição ${index}.`);
}

//A função indexOf() pesquisa o valor no array, se ele encontrar, a função retorna o index do array, se não encontrar, ele retorna -1
if(numbers.indexOf(6)>=0){
  console.log(`O valor pesquisado se encontra no array e está na posição ${numbers.indexOf(6)}`);
}else{
  console.log('O Valor pesquisado não está no array');
}

if(numbers.indexOf(4)>=0){
  console.log(`O valor pesquisado se encontra no array e está na posição ${numbers.indexOf(4)}`);
}else{
  console.log('O Valor pesquisado não está no array');
}