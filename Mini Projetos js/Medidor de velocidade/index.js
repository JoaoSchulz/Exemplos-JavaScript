// Velocidade Max de até 70
// a cada 5km acima do limite, ganha 1 ponto 
// Math.Floor()
// caso pontos maior que 12, 'carteira suspendida'

verificarVelocidade(160);

function verificarVelocidade(Velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if ( Velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor((Velocidade - 70) / KmPorPonto);
        if (pontos >= 12)
            console.log('Carteira suspensa')
        else {
            console.log('Pontos', pontos);
        }
    }
}