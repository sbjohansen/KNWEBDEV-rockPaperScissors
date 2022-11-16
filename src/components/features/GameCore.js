const GameCore = () => {
  // komputer losuje liczbe z zakresu 1-3

  const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
    
      return 'rock';
    } else if (randomNumber === 2) {
      return 'paper';
    } else return 'scissors';
  };



  // gracz wybiera papier, kamien, nozyce

  const gameLogic = (playerChoice) => {
    const readyComputerChoice = computerChoice();
    console.log('playerChoice', playerChoice);
    console.log('readyComputerChoice', readyComputerChoice);
    if (playerChoice === readyComputerChoice) {
      console.log('remis');
      return 'remis';
    } else if (playerChoice === 'rock' && readyComputerChoice === 'scissors') {
      console.log('wygrales');
      return 'wygrales';
    } else if (playerChoice === 'scissors' && readyComputerChoice === 'paper') {
      console.log('wygrales');
      return 'wygrales';
    } else if (playerChoice === 'paper' && readyComputerChoice === 'rock') {
      console.log('wygrales');
      return 'wygrales';
    } else {
      console.log('przegrales');
      return 'przegrales';
    }
  };

  return (
    <div>
      <button value='rock' onClick={(e) => gameLogic(e.target)}>
        Rock
      </button>

      <button value='paper' onClick={(e) => gameLogic(e.target.value)}>
        Paper
      </button>
      <button value='scissors' onClick={(e) => gameLogic(e.target.value)}>
        Scissors
      </button>
    </div>
  );
};

export default GameCore;
