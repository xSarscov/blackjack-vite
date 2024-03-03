
/**
 * Ask for a card from the deck
 * @param {Array<String>} deck Example: ['2C', '5D', '7S', '8H'...]
 * @returns {String} Returns the last card from the deck
 */

export const askCard = (deck) => {
    if (!deck) {
        throw new Error("deck argument must provided")  
    }  
    if (!deck.length) {
        throw new Error("There's no cards in the deck!")  
    }  

    return deck.pop();
} 