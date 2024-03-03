/**
 * Check players' score and set the winner
 * @param {Array<Number>} playersScore Player points count where the last score is the computer's. Example: [18, 21]
 */

export const setWinner = (playersScore) => {

    if (!playersScore) throw new Error('playerScore argument is required');

    const [minimunScore, computerScore] = playersScore;

    setTimeout(() => {
        if (minimunScore === computerScore) {
            alert("It's a tie!");
        } else if (computerScore > 21) {
            alert("You won!");
        } else {
            alert('Computer wins!')
        }
    }, 1000);
}
