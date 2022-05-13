function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda','Sabrina','Rafael','Joao','Luis'];
    if(ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaodeEntrada').innerText = 'Voce pode Entrar!';

    }else{
        document.getElementById('PermissaodeEntrada').innerText = 'Voce nao pode Entrar!';
    }
}