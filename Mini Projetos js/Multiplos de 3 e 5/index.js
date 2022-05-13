// Criar função somar que retorna a
// soma de todos os mult de 3 e 5

//mult de 3 -- 3,6,9
//mult de 5 -- 5,10

//somar mult

somar(10);
function somar(limite){
    let a = 0;
    let b = 0;
    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0){
            a += i;
        }
        else if(i % 5 === 0){
            b += i;
        }
    }
    let c = a + b;
    console.log(c);
}