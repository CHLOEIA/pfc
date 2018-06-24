
let score = [0,0,0];


function computerPlay() {
  rand = Math.floor(Math.random() * Math.floor(3));
  if (rand === 1){
    return ("rock")
  } else if (rand ===2){
    return ("paper")
  } else {
    return ("scissor")
  }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  player = playerSelection.toLowerCase();
  comp = computerSelection.toLowerCase();
  if ((player === "rock" && comp ==="paper") || (player ==="paper" && comp ==="scissor") || (player==="scissor" && comp==="rock" )){
    return("Lose")
  } else if (player===comp){
    return("Draw")
  } else {
    return("Win")
  }
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    partie(button.id);
  });
});

const content = document.createElement('p');
function partie(buttonId){
  let nbParties = score[0]+score[1]+score[2]+1;
  console.log(buttonId);
  if (nbParties<5){
    let resultat = game(buttonId);
    content.textContent = "Partie " + nbParties + " sur 5 : " + resultat;
    container.appendChild(content);
  }
  else {
    
    content.textContent = score[0] + " à " + score[2];
    container.appendChild(content);
    let rejouer = document.createElement('button');
    rejouer.id="rejouer"
    let t = document.createTextNode("Rejouer");  
    rejouer.appendChild(t);  
    container.appendChild(rejouer);
    rejouer = document.querySelector('#rejouer');
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    rejouer.addEventListener('click', () => {
      score = [0,0,0];
      container.removeChild(rejouer);
      document.getElementById("btn1").disabled = false;
      document.getElementById("btn2").disabled = false;
      document.getElementById("btn3").disabled = false;
});

  }
}



function game(buttonId) {
  let compteur = 0;
  let player = buttonId;
    if (player=="btn1"){
      player= "Rock";
    } else if (player=="btn2"){
      player="Paper";
    } else {
      player="Scissor";
    }
    let resultat = playRound(player);
    if (resultat==="Win"){
      score[0]++;
    } else if (resultat==="Lose"){
      score[2]++;
    } else {
      score[1]++
    }

  return resultat
}





