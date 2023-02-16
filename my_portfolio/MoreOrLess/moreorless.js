/* 
/1. generate a random number between 1-100

 LOOP
/2. prompt the user to guess a number
3. tries++;
/4. check the userNum against the winningNumber
    a.if userNum is lower than winningNum
        alert ("too low. guess higher")
        back to step guess a number
    b. userNum is higher than winningNum
        alert ("too high, guess lower")
        back to guess a number
    c. userNum same as winningNum
        alert ("you win!)
        alert ("it took ${tries} attempts."")

*/
/** JSDoc Documentation
 * Generate Random Numbah
 * @param {number} min the minimum value possible
 * @param {number} max the maximum value possible
 * @returns {number} a randomly generated number between min and max
 */

function userNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function playGame(difficulty) {

do {
    var min = 1;
    var max = difficulty;
    var tries = 0;
    var winningNum = userNumber(min, max);

    do {
        var userNum = parseInt(prompt(`Please enter a number between ${min} and ${max}`));
        tries++;

        if (winningNum > userNum) {
            alert("You're too low. Guess higher.");
            min = userNum;
        } else if (winningNum < userNum) {
            alert("You're too high. Guess lower.");
            max = userNum;
        } else if (winningNum == userNum) {
            alert(`You win!! It took ${tries} attempts. `);
            break;
        }

    } while (userNum >= 1 && userNum <= 100);

} while (confirm("Do you want to play again?"));
    alert("See you again!");
}