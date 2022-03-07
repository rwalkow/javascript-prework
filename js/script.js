function playGame(argMoveId){
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
  const move = ['kamień','papier','nożyce'];
  /*
  if (argMoveId < 1 && argMoveId > 3) { //this should never happen, because a random number is in the range 1-3 
    return 'nieznany ruch';             // and the buttons only allow chose the range 1-3 
  } 
  */ 
  return move[argMoveId-1];
};

function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove); 
  clearMessages();
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } else if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||  
	 (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
	 (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
    		printMessage('Ty wygrywasz!');
  }  else {
    printMessage('Tym razem przegrywasz :(');
  }
};

let computerMove = getMoveName(randomNumber);
let playerInput = argMoveId;
let playerMove = getMoveName(playerInput);
displayResult(computerMove, playerMove)
};

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
