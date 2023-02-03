const addGame = async (newScore) => {
  const result = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/  5tZeFvL8uot4ml3hfz7h/scores",
    {
      method: "POST",
      body: JSON.stringify(newScore),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const finalResult = result.json();
  return finalResult;
};
const getGame = async () => {
  const data = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/  5tZeFvL8uot4ml3hfz7h/scores"
  );
  const finalData = await data.json();
  return finalData;
};
export { addGame, getGame };
