function winner() {
  if (turn === 0) {
    if (
      randomVal != 1 &&
      Number(curr_0.textContent) + Number(player_0_score.textContent) >= 20
    ) {
      return true;
    }
  } else {
    if (
      randomVal != 1 &&
      Number(curr_1.textContent) + Number(player_1_score.textContent) >= 20
    ) {
      return true;
    }
  }
  return false;
}

function winnerCSS() {
  dice.classList.add("hidden");

  rollDiceBtn.classList.add("hidden");
  holdBtn.classList.add("hidden");

  if (turn === 0) {
    firstDiv.style.backgroundColor = "rgb(188, 245, 188)";
    player_0_score.textContent = "Winner";
    player_0_score.style.color = "black";
    player_1_score.style.color = "black";

    secondDiv.style.backgroundColor = "#FF6460";
  } else {
    secondDiv.style.backgroundColor = "rgb(188, 245, 188)";
    player_1_score.textContent = "Winner";
    player_0_score.style.color = "black";
    player_1_score.style.color = "black";
    firstDiv.style.backgroundColor = "#FF6460";
  }
}
