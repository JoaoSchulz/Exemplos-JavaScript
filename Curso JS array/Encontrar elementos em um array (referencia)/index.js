// Encontrando Elementos (Referencia)

const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'a'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);