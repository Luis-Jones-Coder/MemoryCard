$(document).ready(function (){
    const cards = $(".card");
    // Creating a function that
    const flipIt = (e) => {
        let card = $(e.currentTarget); // Transform e  to a objet  
        card.addClass("flip");
        // console.log(e.target);
    }

    //  Making all cards listen to the event click to call variable with a function flip
    cards.each(function() {
        $(this).on('click', flipIt);
    });
});