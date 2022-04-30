const dice = document.getElementById("dice");

const player_0_score = document.getElementById("score_1");
const player_1_score = document.getElementById("score_2");

const curr_0 = document.getElementById("curr_1");
const curr_1 = document.getElementById("curr_2");

const rollDiceBtn = document.getElementById("rollDice");

const firstDiv = document.querySelector(".first");
const secondDiv = document.querySelector(".second");

const container = document.querySelector(".container");

let turn = 0;
let randomVal = 0;
