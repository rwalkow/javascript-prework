'use strict';
{
let playerRoundResult=[0,0,0];  // player move: stone, papaer, scissors
let computerRoundResult=[0,0,0]; // computer move: stone, papaer, scissors
let gameResult=[0,0,0]; //palyer win, computer win , draw
let counter = 0;
const cheatingFactor=10; //cheating factor in % for example 10% - cheat every 10-th move

const playGame = function(argMoveId){

  const getWinningMove = function(argMoveId){
    return (argMoveId %3) +1;
  };

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  counter++;
  console.log(counter);
  if (counter >= 100/cheatingFactor) {
   counter=0;
   randomNumber = getWinningMove(argMoveId);
   console.log('Oszukuję'); 
}

//console.log('Wylosowana liczba to: ' + randomNumber);
  const getMoveName = function(argMoveId){
    const move = ['kamień','papier','nożyce'];
    /*  if (argMoveId < 1 && argMoveId > 3) { //this should never happen, because a random number in the range 1-3 
        return 'nieznany ruch';             // and the buttons only allow selection in the range 1-3
      }  */ 
    return move[argMoveId-1];
  };


  const displayResult=function(argComputerMove, argPlayerMove){
    let moveTableRows="", gameTableRows=""; 
    clearMessages();
    printMessage(`Zagrałem ${argComputerMove} , a Ty  ${argPlayerMove}`);

    if( argComputerMove === argPlayerMove){
     printMessage('Remis!');
     gameResult[2]++;
    } else if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||  
	    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
	    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
	    printMessage('Ty wygrywasz!');
        gameResult[0]++;
    }  else {
     printMessage('Tym razem przegrywasz :(');
     gameResult[1]++;
    }

  for (let i=0;i<3;i++) {
    moveTableRows=`${moveTableRows} 
            <tr>
               <td>${getMoveName(i+1)}</td>
               <td>${playerRoundResult[i]}</td>
               <td>${computerRoundResult[i]}</td>
            </tr>`;
    gameTableRows=`${gameTableRows}<td>${gameResult[i]}</td>`;
  }

  let moveTable = `<table>
    <tr>
      <th>Ruch</th>
      <th>Gracz</th>
      <th>Komputer</th>
    </tr>
    ${moveTableRows}
    </table>`,  
    
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
}

playerRoundResult[argMoveId-1]++;
computerRoundResult[randomNumber-1]++;
let computerMove = getMoveName(randomNumber),
    playerMove = getMoveName(argMoveId);


displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}