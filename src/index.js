import "./style.css";
import { addGame } from "./modules/api.js";
import renderGame from "./modules/display";

const formSubmit = document.querySelector(".input-form");
const refresh = document.querySelector(".refresh-btn");
const nameInput = document.getElementById("name-input");
const scoreInput = document.getElementById("score-input");

formSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = nameInput.value;
  const score = scoreInput.value;
  if (!user || !score) return;
  const newscore = {
    user,
    score,
  };
  addGame(newscore);
  formSubmit.reset();
});
refresh.addEventListener("click", (e) => {
  e.preventDefault();
  renderGame();
});
document.addEventListener("DOMContentLoaded", async () => {
  renderGame();
});
