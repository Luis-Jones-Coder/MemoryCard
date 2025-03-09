document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const num_matching = document.querySelector(".game-container h2 span")
    
    let card_1, card_2;
    let disableCards = false;
    let matching = 0;
   


    // Compare if the images are the same and if they are, clear card_1 and card_2 so that the images remain flipped and stop rotating
    const comparing = (imagen1, imagen2) => {
        if (imagen1 === imagen2) {
            // Each time we match a card, 1 will be added to the variable.
            matching++
            num_matching.innerHTML = matching;
            if (matching == 8){
                 return resetGame();
            }
            // Remove the event listener so that it cannot be clicked
            card_1.removeEventListener("click", flipIt);
            card_2.removeEventListener("click", flipIt);

            card_1 = card_2 = "";

            return disableCards = false;
        }

        // Add the "move" class to card_1 and card_2 after 500ms
        setTimeout(() => {
            card_1.classList.add("move");
            card_2.classList.add("move");
        }, 500);

        // Remove the "move" class and add the "flip" class after 1500ms
        setTimeout(() => {
            card_1.classList.remove("move", "flip");
            card_2.classList.remove("move", "flip");

            card_1 = card_2 = "";
            disableCards = false;
        }, 1500);
    };

    const flipIt = (e) => {
        let card = e.target;
        // Ensure that the next click is on a different card than card_1
        if (card !== card_1 && !disableCards) {
            card.classList.add("flip");
            if (!card_1) {
                return card_1 = card;
            }
            card_2 = card;
            disableCards = true;

            // Getting images
            let img1 = card_1.querySelector('img').src;
            let img2 = card_2.querySelector('img').src;

            comparing(img1, img2);
        }
    };

    // This function retart the game
    const resetGame = () =>{
        matching = 0;
        card_1 = card_2 = "";
        num_matching.innerHTML = matching;

        cards.forEach(function(card) {
            // Make the card flip back to initial position
            card.classList.remove("flip");
            card.addEventListener('click', flipIt);
        });
    }

    // Make all cards listen to the click event and call the flipIt function
    cards.forEach(function(card) {
        card.addEventListener('click', flipIt);
    });
});
