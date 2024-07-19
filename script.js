// Get references to the HTML elements
const playerImage = document.getElementById('player-image');
const opponentImage = document.getElementById('opponent-image');
const changeButton = document.getElementById('button');

// Define the possible choices for the player and opponent
const choices = ['rock', 'paper', 'scissors'];

// Define a function to generate a random choice for the player and opponent
function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Add an event listener to the change button
changeButton.addEventListener('click', () => {
  // Generate a random choice for the player
  const playerChoice = getRandomChoice();

  // Generate a random choice for the opponent, making sure it's not the same as the player's choice
  let opponentChoice;
  do {
    opponentChoice = getRandomChoice();
  } while (opponentChoice === playerChoice);

  // Update the player and opponent images
  try {
    playerImage.src = `./assets/Player-${playerChoice}.png`;
    opponentImage.src = `./assets/Opponent-${opponentChoice}.png`;
  } catch (error) {
    console.error(`Error loading images: ${error}`);
  }

  // Determine the winner based on the game rules
  let result;
  if (playerChoice === opponentChoice) {
    result = 'Tie!';
  } else if (
    (playerChoice === 'rock' && opponentChoice === 'scissors') ||
    (playerChoice === 'scissors' && opponentChoice === 'paper') ||
    (playerChoice === 'paper' && opponentChoice === 'rock')
  ) {
    result = 'You win!';
  } else {
    result = 'Opponent wins!';
  }

  // Update the result text on the website
  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
});

// Get the button and

// Get the button and container elements
const revealBtn = document.getElementById('reveal-btn');
const intro = document.querySelector('.intro');
const container = document.getElementById('container');

revealBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  container.classList.remove('hidden');
  container.classList.add('reveal');
});