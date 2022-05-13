// Criar um método para ler propriedades de um objeto
// exibir somente as propriedades do tipo string q estao no objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor',
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj) //ver todas as prop de um obj
        if(typeof obj[prop] === 'string')//compara o tipo do obj da prop com a string
            console.log(prop,obj[prop]) //exibir o tipo da prop e o obj indexado da prop
}