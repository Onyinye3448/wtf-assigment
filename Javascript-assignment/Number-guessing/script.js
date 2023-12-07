const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = Math.random();
console.log(name);
let num = name * 100;
let int4 = Math.ceil(num);

function generateNum(guess) {
  if (guess !== int4) {
    if (guess < int4) {
      console.log("Your number is too low!");
    } else if (guess > int4) {
      console.log("Your number is too high!");
    }
  } else if (guess === int4) {
    console.log("Congratulations! Your guess is correct!");
    rl.close();
  }
}

// Define a function to get user input
function getUserInput() {
  rl.question("Enter your guess: ", (userInput) => {
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess)) {
      console.log("Please enter a valid number.");
      getUserInput();
    } else {
      generateNum(userGuess);
      getUserInput();
    }
  });
}

getUserInput();
