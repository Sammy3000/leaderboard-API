import './style.css';
import { addGame, getGame } from './modules/api.js';

const formSubmit = document.querySelector('.input-form');
const refresh = document.querySelector('.refresh-btn');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const renderGame = async () => {
  const outputContainer = document.querySelector('.output-list');
  outputContainer.innerHTML = '';
  const getResult = await getGame();
  getResult.result.forEach((res) => {
    const html = `
    <li class="output-li">${res.user}:${res.score}</li>
    `;
    outputContainer.insertAdjacentHTML('beforeend', html);
  });
};

formSubmit.addEventListener('submit', async (e) => {
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
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  renderGame();
});
document.addEventListener('DOMContentLoaded', async () => {
  renderGame();
});
