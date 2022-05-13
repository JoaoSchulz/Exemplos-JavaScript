//Encontrar Elementos(primitivos)

const numeros = [1,2,3,1,4]; 
console.log(numeros.indexOf(2)); //busca o indice de numero 2 dentro da array, se encontrar -1 ele nao encontrou o indice
console.log(numeros.lastIndexOf(1)); //busca a ultima ocorrencia desse valor 1, no caso mostra o indice 3
console.log(numeros.indexOf(2) !== -1); // retorna o true, pq existe o indice dentro da array
console.log(numeros.includes(2));// semelhante ao de cima, porem mais simples