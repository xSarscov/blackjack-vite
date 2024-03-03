import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {Array<String>} cardTypes Example: ['C', 'D', 'H', 'S']
 * @param {Array<String>} faceCards Example: ['A', 'J', 'K', 'Q']
 * @returns {Array<String>} Returns a new deck of cards in random order
 */

export const createDeck = (cardTypes, faceCards) => {
    if (!cardTypes || !cardTypes.length) {
        throw new Error('cardTypes argument is required and must not be an empty array.');
    }    
    if (!faceCards || !faceCards.length) {
        throw new Error('faceCards argument is required and must not be an empty array.');
    }
    
    
    
    let deck = [];

    // Add pip cards
    for (let i = 2; i <= 10; i++) {
        for (let type of cardTypes) {
            deck.push(i + type);
        }
    }

    // Add face cards
    for (let faceCard of faceCards) {
        for (let type of cardTypes) {
            deck.push(faceCard + type);
        }
    }

    return _.shuffle(deck);
}