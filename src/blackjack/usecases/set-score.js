import { getCardValue } from "./";

/**
 * Set score to a specific player
 * @param {Number} player The player's index or number
 * @param {String} card Example: 2C
 * @param {Array<Number>} playersScore Player points count where the last score is the computer's. Example: [18, 21]
 * @param {HTMLElement} playersScoreBoard The array of HTML Containers for Player scores
 * @returns {Number} Returns a numeric value that is the player's new score
 */

export const setScore = (player, card, playersScore, playersScoreBoard) => {

    if (isNaN(player)) throw new Error('player argument is required');
    if (!card) throw new Error('card argument is required');
    if (!playersScoreBoard) throw new Error('playersScoreBoard argument is required');

    playersScore[player] += getCardValue(card);
    playersScoreBoard[player].innerText = playersScore[player];
    return playersScore[player];
}