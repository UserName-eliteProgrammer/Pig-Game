// intial settings
dice.classList.add("hidden");
player_0_score.textContent = "0";
player_1_score.textContent = "0";
curr_0.textContent = "0";
curr_1.textContent = "0";

firstDiv.style.backgroundColor = "pink";
secondDiv.style.backgroundColor = "rgb(246, 142, 160)";

function changePlayer() {
  if (turn === 0) {
    turn = 1;
    firstDiv.style.backgroundColor = "rgb(246, 142, 160)";
    secondDiv.style.backgroundColor = "pink";
  } else {
    turn = 0;
    firstDiv.style.backgroundColor = "pink";
    secondDiv.style.backgroundColor = "rgb(246, 142, 160)";
  }
}

function playFunc(randomVal) {
  // console.log(randomVal);

  dice.classList.remove("hidden");
  dice.src = `../Images/dice-${randomVal}.png`;

  if (turn === 0) {
    if (randomVal === 1) {
      player_0_score.textContent = "0";
      curr_0.textContent = "0";
      changePlayer();
    } else {
      curr_0.textContent = String(Number(curr_0.textContent) + randomVal);
    }
  } else {
    if (randomVal === 1) {
      player_1_score.textContent = "0";
      curr_1.textContent = "0";
      changePlayer();
    } else {
      curr_1.textContent = String(Number(curr_1.textContent) + randomVal);
    }
  }
}

rollDiceBtn.addEventListener("click", () => {
  randomVal = 1 + Math.round(Math.random() * 5);
  playFunc(randomVal);
});
