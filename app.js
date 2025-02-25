const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const reset_btn = document.querySelector(".reset_btn");

const select = document.querySelector("#select");
let score_1 = 0;
let score_2 = 0;

const player1_btn = document.querySelector(".player1_btn");
const player2_btn = document.querySelector(".player2_btn");

let final = +select.value;
let boolen = true;

player1_btn.addEventListener("click", (e) => {
  if (boolen) {
    if (score_1 == final) {
      player1.style.color = "green";
      player2.style.color = "red";
      boolen = false;
    } else {
    }
    score_1++;
    player1.textContent = score_1;
  }
});

player2_btn.addEventListener("click", (e) => {
  if (boolen) {
    if (score_2 == final) {
      boolen = false;
      player1.style.color = "red";
      player2.style.color = "green";
    } else {
    }
    score_2++;
    player2.textContent = score_2;
  }
});
// reset btn
select.addEventListener("change", () => {
  final = +select.value;
});

reset_btn.addEventListener("click", () => {
  score_1 = 0;
  score_2 = 0;
  boolen = true;

  player1.textContent = score_1;
  player2.textContent = score_2;

  player1.style.color = "black";
  player2.style.color = "black";
});
