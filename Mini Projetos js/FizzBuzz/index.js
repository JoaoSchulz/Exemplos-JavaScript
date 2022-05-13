// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 => entrada
// não é um numero => 'Não é um numero'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'não é um numero';
    if(entrada % 3 === 0 && entrada % 5 ===0)
        return 'fizzBuzz'
    if(entrada % 3 === 0)
        return 'Fizz'
    if(entrada % 5 === 0)
        return 'Buzz'
    return entrada;
} 