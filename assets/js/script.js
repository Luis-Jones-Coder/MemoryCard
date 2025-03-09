document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    let card_1, card_2;

    const comparing = (imagen1, imagen2) => {
        if (imagen1 == imagen2) {
            return console.log("son iguales");
        }
        
        // console.log("adding move");
        // Add the "move" class to card_1 and card_2
        setTimeout(() =>{
            card_1.classList.add("move");
            card_2.classList.add("move");
        })
       

        // Remove the "move" class and add the "flip" class after 1500ms
        setTimeout(() => {
            card_1.classList.remove("move");
            card_2.classList.remove("move");
            card_1.classList.add("flip");
            card_2.classList.add("flip");
        }, 1500);
    };

    const flipIt = (e) => {
        let card = e.target;
        card.classList.add("flip");

        

        // Ensure that the next click is on a different card than card_1
        if (card !== card_1) {
            if (!card_1) {
                return (card_1 = card);
            }
            card_2 = card;

            // Getting images
            let img1 = card_1.querySelector('img').src;
            let img2 = card_2.querySelector('img').src;

            comparing(img1,img2);
        }
    };

    // Make all cards listen to the click event and call the flipIt function
    cards.forEach(function(card) {
        card.addEventListener('click', flipIt);
    });
});
