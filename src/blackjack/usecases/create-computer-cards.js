    import { askCard, setWinner, createCard, setScore } from "./";

    /**
     * Create the computer's image card and set its score
     * @param {Number} minimunScore Minimum Points That the Computer Needs to Win
     * @param {Array<String>} deck Example: ['C', 'D', 'H', 'S']
     * @param {Array<Number>} playersScore Player points count where the last score is the computer's. Example: [18, 21]
     * @param {HTMLElement} playerScoreBoard array of HTML Containers for Player scores
     * @param {HTMLElement} playerCards The array of HTML Containers for Player Card Images
     */
    

    export const createComputerCards = (minimunScore, deck = [], playersScore, playerScoreBoard, playerCards) => {

        if (isNaN(minimunScore)) throw new Error('minimunScore argument is required');
        if (!playersScore || !playersScore.length) throw new Error('playersScore argument is required');

        // Create computer's card and set its score until the computer or player wins
        let computerScore = 0;

        do {
            // Set the computer card score and its image 
            const card = askCard(deck);
            computerScore = setScore(playersScore.length - 1, card, playersScore, playerScoreBoard);
            createCard(playersScore.length - 1, card, playerCards);

        } while ((computerScore < minimunScore) && (minimunScore <= 21));

        // Determine who's the winner or if it's a tie
        setWinner(playersScore);

    }