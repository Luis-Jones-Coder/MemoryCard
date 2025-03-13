document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const num_matching = document.querySelector(".game-container h2 span")
    
    let card_1, card_2;
    let disableCards = false;
    let matching = 0;
    // Getting the audios from html
    let backgrounSounds = document.querySelector("#backgrounSounds");
    // backgrounSounds.play();
    let cardSound = document.querySelector("#cardSound");
    cardSound.play()
    let sounds = document.querySelector("#sounds");
    sounds.play();
    let playing = document.querySelector(".playing");
    

    // Create a catch function to identify the possible error and add a click event listener since it does not allow initializing the music without user interaction.
    backgrounSounds.play().catch(() => {
        document.addEventListener('click', () => {
            backgrounSounds.play();
        });
    });

   
    
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cardSound.play().catch((error) => {
                    console.log('Error reproduciendo el sonido de la carta:', error);
                });
            });
        });


    const music = (e) => {
        if (backgrounSounds.volume == 0.0) {
            backgrounSounds.volume = 0.5; 
            playing.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; 
        } else {
            backgrounSounds.volume = 0.0; 
            playing.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    };
     playing.addEventListener("click", music);

    // Compare if the images are the same and if they are, clear card_1 and card_2 so that the images remain flipped and stop rotating
    const comparing = (imagen1, imagen2) => {
        if (imagen1 === imagen2) {
            sounds.src = "assets/Music/correct-6033.mp3";
            sounds.volume = 0.5;
            sounds.play()
            // Each time we match a card, +1 will be added to the variable.
            matching++
            num_matching.innerHTML = matching;
            if (matching == 8){
                // The function of the timeout is to give a second before resetting the cards
                setTimeout(() => {
                    return resetGame();
                }, 1000);
                
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

            sounds.src = "assets/Music/error-8-206492.mp3";
            sounds.volume = 0.5;
            sounds.play()

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
        backgrounSounds.src = "assets/Music/mr-23142.mp3";
        backgrounSounds.volume = 0.5;
        backgrounSounds.play()
        matching = 0;
        card_1 = card_2 = "";
        disableCards = false;
        num_matching.innerHTML = matching;

        // Creating the array to obtain random numbers with the Math.random function
        let numbers = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
        numbers.sort(() =>{ return Math.random() - 0.5});
        

        // This function makes it so that each time we restart the game, the cards appear in different positions. 
        cards.forEach((card,index) => {
            // Make the card flip back to initial position
           
            card.classList.remove("flip");
            // Obtaining the images of the cards
            let img = card.querySelector("img");
            // Using the image attribute to add the numbers array with an index that would already provide the random number, so that our cards appear in different positions.
            img.src = `assets/image/${numbers[index]}.png`
            card.addEventListener('click', flipIt);
        });
    }
    

    resetGame();

    // Make all cards listen to the click event and call the flipIt function
    cards.forEach(function(card) {
        
        card.addEventListener('click', flipIt);
    });
});
