# MEMORY FRUITS >> Project.

## Memory Fruits - How It Was Created.

### Development Process.

### Technologies Used

[**Flexbox**](Flexbox)
- Flexbox makes it easy to create flexible and responsive layouts.

[**HTML5**](https://www.w3schools.com/html/html_intro.asp)
- Was used to structure the web page  

[**Google Fonts**](https://fonts.google.com/)
- Google font was used for the font of the website.

[**Custom CSS**](https://www.w3schools.com/css/)
- Was added to override default Bootstrap styles and match the client’s branding.

[**Fontawesome**](https://fontawesome.com/kits)
- Was added to add the icons in the page.


**Inspiration:**
I drew inspiration from [YouTube](https://www.youtube.com/watch?v=ZniVgo8U7ek) tutorials, where I learned essential techniques for structuring and styling a memory card game.

These tutorials helped me understand the logic behind card-flipping games and provided useful ideas for designing a user-friendly interface.

### How to Play the Fruit Memory Card Game
**1. Objective:** 
Match all pairs of fruit cards with the fewest attempts possible by remembering their locations.

**2. Setup:** 
The cards are laid face-down in a grid.
Each card has a fruit image on one side, and there are matching pairs for each fruit.

**3. Gameplay:** 
Click on two cards to flip them.
If they don’t match, the cards will flip back face-down. Try to remember their positions!
If the cards reveal the same fruit, it’s a match! The cards stay face-up.
If the cards don’t match, they are flipped back face-down, and the player must remember their positions for future attempts.

**4. Winning:** 
The game ends when all pairs are matched.
Players can compete for the fewest number of attempts.

### Features
I used [Pixabay](https://pixabay.com/es/sound-effects/search/juego/?pagi=13) for the sound effects.
Sound Effects: Enjoy delightful audio feedback when you click on a card or successfully match a pair.

Visual Effects: Smooth animations enhance the game experience.

Accessible Interface: Intuitive design makes the game easy to play for everyone.

### Testing
**1. Card Click Sound**
Bug: Sound effects were triggered when clicking anywhere on the interface, not just on the cards.

Impact: This led to an inconsistent and distracting user experience, as the sound was unintentionally played for non-card elements.

**Proposed Solution**
Assign the eventListener directly to the card elements so that the sound effect is only triggered when clicking on a card.

**2. Testing Report: Responsive Card Display Issue**
Bug: The cards were not properly contained within the game grid on different screen sizes. The cards overflowed outside the container, disrupting the layout.

Impact: This caused a poor user experience on devices with varying screen dimensions, such as mobile phones or tablets.

**Proposed Solution**
Use CSS media queries to adjust the layout and card dimensions based on screen size.

**HTML validator WRC**
I have used the recommended css [validator WRC](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate all of my css files.

**CSS validator WRC**
I have used the recommended html [validator WRC](https://validator.w3.org/#validate_by_input) to validate all of my html files.

**JShint Validator**
I have used the recommended [JShint Validator](https://jshint.com/) to validate all of my JS files.

### Deployment
**Code Review:** Ensured all code is clean, error-free, and well-documented.


**Verifying the Deployment:** Visual Check: Browsed the deployed site to ensure it looks and works correctly.

Functional Testing: Tested all critical functionalities (forms,links, responsive fuctionality) to confirm they work as expected.

**Code Updates:**
Made incremental updates to the codebase.
Committed and pushed changes to the repository.

**Verification:**
Tested the functionality of all features in the deployed version.
Checked for layout issues, broken functionality, or any error messages.
Monitored console logs and server responses for errors or warnings.

## Acknowledgements

- I would like to thank my Code Institute mentor, Dickv for their support throughout the development of this project.

- I would like to thank the Code Institute tutor team for their assistance with troubleshooting and debugging some project issues.
