//CASINO GAME //
/*
Principle : 
X --> at the beginning we have an amount of money (1000$)
X --> we sit at a table
=======
X --> we choose a number between 0 to 36 to bet on (prompt)
X --> we choose an amount of money to bet (prompt)
X --> we trigger a random number between 0 and 36 
--> winning rules decision maker : (if / else if / else)
    X --> same number as the roulette number : bet multipled by 36
    X --> same color :  bet multiplied by 2
    X --> wrong number and wrong color : we lose the bet amount
X --> we add or subtract the money
--> we ask the player if they want to play again. (confirm)
=======
*/

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function casino () {
    var money = 1000;
    welcome();
}

function bet (money) {
    let amountBet;
    do {
        amountBet = parseInt(prompt('You have $${money}. How much will you bet?'));
    } while (amountBet <= 0 || amountBet > money || isNaN(amountBet));
    return amountBet;
}

var money = 1000;
alert("Welcoooome to our casino!\nPlease take a seat.");
alert("Whatever happens at the casino, stays in the casino!");

do {
    var playerNumber = -1, amountBet = -1;

    // User should choose a number
    while(!(playerNumber >= 0 && playerNumber <= 36)) {
        playerNumber = parseInt(prompt("Choose a number to bet on.\nBetween 0 and 36:"));
    }
    // User should enter a bet amount
    amountBet = bet (money);
    
    alert("The wheel is spinnniiiinnnngg....");
    alert("Beep bop beep bop boopity boop..");
    alert("The wheel is slowing doooowwnnn...");
    // Get the  roulette winning number
    var rouletteNumber = randomNumber (0, 36);
    alert(`The wheel landed on: ${rouletteNumber}`);
    
    var win;
    // if same number, win bet * 36
    if (playerNumber == rouletteNumber) {
        alert("You win!!! JACKPOT!!!");
        win = amountBet * 36;
        alert(`You've won: $${win}`);
    // if same even/odd, win bet * 2
    }  else if (playerNumber % 2 == rouletteNumber % 2) {
        alert("You win! Same color.");
        win = amountBet * 2;
        alert(`You've won: $${win}`);
    // lose bet amount
    } else {
        alert("LOSER!!!! Try again! Keep giving me money!");
        win = -amountBet;
        alert(`You've lost: $${win}`);
    }
    
    money += win;
    alert(`You now have: $${money}`);
// Loop if they want to play again
} while(confirm("Would you like to play again?"));

alert("Bye bwye~ See ya next time!");

casino ();