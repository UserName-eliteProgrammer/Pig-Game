const holdBtn = document.getElementById("holdBtn");

holdBtn.addEventListener("click", () => {
  if (winner()) {
    winnerCSS();
    return;
  }

  if (turn === 0) {
    player_0_score.textContent =
      Number(player_0_score.textContent) + Number(curr_0.textContent);
    curr_0.textContent = "0";
    console.log(player_0_score.textContent);
  } else {
    player_1_score.textContent =
      Number(player_1_score.textContent) + Number(curr_1.textContent);
    curr_1.textContent = "0";
  }
  changePlayer();
});
