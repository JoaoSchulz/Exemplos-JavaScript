//Remover Elementos

const numeros = [1,2,3,4,5,6];
numeros.push();//coloca um numero no final
numeros.unshift();// coloca um numero no começo
numeros.splice(); //coloca um numero no meio parametro(indice,quantos numeros vou remover, qual numero vai entrar)

//final
const ultimo = numeros.pop();// remove um numero do final
console.log(ultimo);
console.log(numeros);
//inicio
const primeiro = numeros.shift();//remove do começo
console.log(primeiro);
console.log(numeros);
//meio
const meio = numeros.splice(2,1);// remove no meio com o parametro
console.log(meio);
console.log(numeros);