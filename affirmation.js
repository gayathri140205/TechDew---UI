const affirmations = [
  "I am doing my best, and that is enough.",
  "I choose to see the good in myself and others.",
  "I am in charge of how I feel, and today I choose happiness.",
  "Every step I take brings me closer to my goals.",
  "I radiate positivity and attract wonderful things.",
  "I am proud of how far I’ve come."
];

let currentAffirmation = 0;

function updateAffirmation() {
  const box = document.getElementById("affirmationBox");
  box.innerHTML = `<p>"${affirmations[currentAffirmation]}"</p>`;
  currentAffirmation = (currentAffirmation + 1) % affirmations.length;
}

// Start changing affirmations every 3 seconds
setInterval(updateAffirmation, 3000);

// Initial load
document.addEventListener("DOMContentLoaded", updateAffirmation);
