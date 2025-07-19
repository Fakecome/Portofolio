const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.choice-btn');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

const choices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

choiceBtns.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.textContent = choiceEmojis[playerChoice];
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.textContent = choiceEmojis[computerChoice];
}

function getResult() {
    if (computerChoice === playerChoice) {
        resultDisplay.textContent = "Seri!";
    } else if (
        (computerChoice === 'rock' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'rock')
    ) {
        resultDisplay.textContent = 'Kamu Menang!';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultDisplay.textContent = 'Kamu Kalah!';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
} 