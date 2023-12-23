const challenges = [
  "Learn a random word in a new language.",
  "Write a short poem about your day.",
  "Draw a doodle without lifting your pen.",
  "Find and listen to a new genre of music.",
  "Learn a magic trick and perform it for someone."
];

function generateChallenge() {
  const challengeText = document.getElementById('challengeText');
  const randomIndex = Math.floor(Math.random() * challenges.length);
  challengeText.textContent = `Challenge of the Day: ${challenges[randomIndex]}`;
}
