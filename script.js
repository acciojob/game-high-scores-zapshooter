const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (!name || !score) return;

  // Use key "scores" to match what the tests expect
  const existing = JSON.parse(localStorage.getItem("scores") || "[]");

  existing.push({ name, score: Number(score) });
  localStorage.setItem("scores", JSON.stringify(existing));

  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

function showScores() {
  const data = JSON.parse(localStorage.getItem("scores") || "[]");

  if (data.length === 0) {
    scores.textContent = "No scores yet";
    return;
  }

  // Sort descending by score so highest score appears first
  data.sort((a, b) => b.score - a.score);

  let html = "<table><tr><th>Name</th><th>Score</th></tr>";
  data.forEach(({ name, score }) => {
    html += `<tr><td>${name}</td><td>${score}</td></tr>`;
  });
  html += "</table>";

  scores.innerHTML = html;
}