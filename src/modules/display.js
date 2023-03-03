import { getGame } from "./api";

const renderGame = async () => {
  const outputContainer = document.querySelector(".output-list");
  outputContainer.innerHTML = "";
  const getResult = await getGame();
  getResult.result.forEach((res) => {
    const html = `
    <li class="output-li">${res.user}:${res.score}</li>
    `;
    outputContainer.insertAdjacentHTML("beforeend", html);
  });
};
export default renderGame;
