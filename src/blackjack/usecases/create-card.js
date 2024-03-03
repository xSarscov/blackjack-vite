/**
 * Create card image and add it to the page
 * @param {Number} player The player's index or number
 * @param {String} card Example: 2C
 * @param {HTMLElement} playerCards The array of HTML Containers for Player Card Images
 */

export const createCard = (player, card, playerCards) => {

    if(isNaN(player)) throw new Error('player argument is required');
    if(!card) throw new Error('card argument is required');
    if(!playerCards) throw new Error('playerCards argument is required');

    const cardImage = document.createElement('img');
    cardImage.src = `assets/cards/${card}.png`;
    cardImage.classList.add('img-fluid', 'deck__cards');
    playerCards[player].appendChild(cardImage);
}
