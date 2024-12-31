//your JS code here. If required.

let player1Name = '';
let player2Name = '';
let currentPlayer = 'X';

document.getElementById('submit').addEventListener('click', () => {
  player1Name = document.getElementById('player-1').value;
  player2Name = document.getElementById('player-2').value;
  document.querySelector('.game-board').style.display = 'block';
  document.querySelector('.player-names').style.display = 'none';
  updateMessage();
});

document.querySelectorAll('.cell').forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      checkWinner();
      switchPlayer();
      updateMessage();
    }
  });
});

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function updateMessage() {
  const message = document.querySelector('.message');
  message.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}, you're up!`;
}

function checkWinner() {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const combination of winningCombinations) {
    const cell1 = document.getElementById(combination[0]);
    const cell2 = document.getElementById(combination[1]);
    const cell3 = document.getElementById(combination[2]);

    if (cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent && cell1.textContent !== '') {
      declareWinner();
      return;
    }
  }
}

function declareWinner() {
  const message = document.querySelector('.message');
  message.textContent = `${currentPlayer === 'X' ? player1Name : player2Name} congratulations you won!`;
}