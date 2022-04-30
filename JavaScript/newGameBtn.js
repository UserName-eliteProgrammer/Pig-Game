const newGameBtn = document.getElementById("newGameBtn");

function resetCSS() {
  firstDiv.style.backgroundColor = "pink";
  secondDiv.style.backgroundColor = "rgb(246, 142, 160)";

  container.style.backgroundColor = "rgb(247, 215, 250)";
  rollDiceBtn.classList.remove("hidden");
  holdBtn.classList.remove("hidden");
  secondDiv.classList.remove("hidden");

  dice.classList.add("hidden");

  player_0_score.textContent = "0";
  player_1_score.textContent = "0";

  player_0_score.textContent = "0";
  player_0_score.style.color = "rgb(241, 73, 101)";

  player_1_score.textContent = "0";
  player_1_score.style.color = "rgb(241, 73, 101)";

  curr_0.textContent = "0";
  curr_1.textContent = "0";
}

newGameBtn.addEventListener("click", () => {
  resetCSS();
});
