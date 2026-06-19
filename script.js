const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (!name || !score) return;

  // Retrieve existing scores from localStorage (or start with empty array)
  const existing = JSON.parse(localStorage.getItem("highScores") || "[]");

  // Add new entry and save back
  existing.push({ name, score });
  localStorage.setItem("highScores", JSON.stringify(existing));

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

function showScores() {
  const data = JSON.parse(localStorage.getItem("highScores") || "[]");

  if (data.length === 0) {
    scores.textContent = "No scores yet";
    return;
  }

  // Build table with header row + one row per score
  let html = "<table><tr><th>Name</th><th>Score</th></tr>";
  data.forEach(({ name, score }) => {
    html += `<tr><td>${name}</td><td>${score}</td></tr>`;
  });
  html += "</table>";

  scores.innerHTML = html;
}