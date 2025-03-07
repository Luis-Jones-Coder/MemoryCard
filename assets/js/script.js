$(document).ready(function(){
    let firstCard = null;
    let firstCardName = "";
    let score = 0;

    $('.card').on('click', function(){
        // Verifica si la carta ya está volteada
        if ($(this).hasClass('flipped')) {
            return; // Si ya está volteada, no hacer nada
        }

        // Voltear la carta
        $(this).addClass('flipped');

        // Verificar si es la primera o segunda carta clicada
        if (firstCard === null) {
            firstCard = $(this);
            firstCardName = $(this).find('.back-view img').attr('alt');
        } else {
            let secondCardName = $(this).find('.back-view img').attr('alt');

            // Comparar las cartas
            if (firstCardName === secondCardName) {
                score++;
                $('#score').text(score);
            } else {
                // Voltear las cartas de vuelta después de un breve retraso
                setTimeout(() => {
                    firstCard.removeClass('flipped');
                    $(this).removeClass('flipped');
                }, 1000);
            }

            // Reiniciar las variables
            firstCard = null;
            firstCardName = "";
        }
    });
});
