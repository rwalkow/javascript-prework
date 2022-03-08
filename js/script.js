var playerRoundResult=[0,0,0];  // player move: stone, papaer, scissors
var computerRoundResult=[0,0,0]; // computer move: stone, papaer, scissors
var gameResult=[0,0,0]; //palyer win, computer win , draw

function playGame(argMoveId){
let randomNumber = Math.floor(Math.random() * 3 + 1);
//console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
  const move = ['kamień','papier','nożyce'];
  /*
  if (argMoveId < 1 && argMoveId > 3) { //this should never happen, because a random number in the range 1-3 
    return 'nieznany ruch';             // and the buttons only allow selection in the range 1-3 
  } 
  */ 
  return move[argMoveId-1];
};

function displayResult(argComputerMove, argPlayerMove){
  let moveTableRows="";
  let gameTableRows=""; 
  clearMessages();
  printMessage(`Zagrałem ${argComputerMove} , a Ty  ${argPlayerMove}`);

  if( argComputerMove === argPlayerMove){
    printMessage('Remis!');
    gameResult[0]++;
  } else if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||  
	  (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
	  (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
    		printMessage('Ty wygrywasz!');
        gameResult[1]++;
  }  else {
    printMessage('Tym razem przegrywasz :(');
    gameResult[2]++;
  }
    
  for (let i=0;i<3;i++) {
    moveTableRows=`${moveTableRows} 
            <tr>
               <td>${getMoveName(i+1)}</td>
               <td>${playerRoundResult[i]}</td>
               <td>${computerRoundResult[i]}</td>
            </tr>`;
    gameTableRows=`${gameTableRows}<td>${gameResult[i]}</td>`;
  };

  moveTable = `<table>
    <tr>
      <th>Ruch</th>
      <th>Gracz</th>
      <th>Komputer</th>
    </tr>
    ${moveTableRows}
    </table>`;
  
  gameTable = `<table>
    <tr>
      <th>Wygrana gracza</th>
      <th>Wygrana komputera</th>
      <th>Remis</th>
    </tr>
    <tr>      
    ${gameTableRows}
    </tr>
    </table>`;
  
    printMessage('<h2>Statystyka ruchów</h2>');    
    printMessage(moveTable);                   
    printMessage('<h2>Statystyka wyników</h2>');
    printMessage(gameTable);
};

playerRoundResult[argMoveId-1]++;
computerRoundResult[randomNumber-1]++;
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
