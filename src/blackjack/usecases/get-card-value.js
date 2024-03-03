/**
 * This function gets the value assigned to a card
 * @param {String} card Example: 2C 
 * @returns {String} Returns a numeric value of a card
 */

export const getCardValue = (card) => {

    if (!card || !card.length) {
        throw new Error('card argument must be provided and not be an empty string');
    }

    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ? (value === 'A') ? 11 : 10 : value * 1;

}
