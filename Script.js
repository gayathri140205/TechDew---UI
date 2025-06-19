function scrollToMood() {
  document.getElementById("mood").scrollIntoView({ behavior: "smooth" });
}

const quotes = {
  happy: [
    "Happiness is a direction, not a place.",
    "Smile, it’s free therapy.",
    "Be happy for this moment. This moment is your life."
  ],
  sad: [
    "Tough times never last, but tough people do.",
    "It’s okay to not be okay.",
    "Sadness flies away on the wings of time."
  ],
  angry: [
    "For every minute you remain angry, you give up sixty seconds of peace.",
    "Anger is one letter short of danger.",
    "Control your anger, or it will control you."
  ],
  neutral: [
    "Life is what you make of it.",
    "Keep going, no matter what.",
    "Balance is the key to everything."
  ]
};

function showQuote(mood) {
  const moodQuotes = quotes[mood];
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  document.getElementById('quoteBox').innerHTML = `<p>"${moodQuotes[randomIndex]}"</p>`;
}
// 3rd Section - Daily Challenges
const challenges = [
  "Drink 2 liters of water today.",
  "Go for a 10-minute walk.",
  "Compliment someone genuinely.",
  "Take 5 deep breaths right now.",
  "Avoid your phone for 1 hour."
];

function showChallenge() {
  const index = Math.floor(Math.random() * challenges.length);
  document.getElementById("challengeText").innerText = challenges[index];
}

// 4th Section - Self-Care Tips
const tips = [
  "Sleep at least 7 hours tonight.",
  "Unfollow one negative account.",
  "Eat fruits today.",
  "Write a journal entry.",
  "Stretch for 5 minutes."
];
let tipIndex = 0;

function showNextTip() {
  const tipList = document.getElementById("tipList");
  if (tipIndex < tips.length) {
    const li = document.createElement("li");
    li.innerText = tips[tipIndex];
    tipList.appendChild(li);
    tipIndex++;
  } else {
    alert("You’ve seen all the tips for now!");
  }
}

// 5th Section - Gratitude Note
function saveGratitude() {
  const input = document.getElementById("gratitudeInput").value.trim();
  if (input) {
    document.getElementById("gratitudeDisplay").innerText = `🌸 You are grateful for: "${input}"`;
    document.getElementById("gratitudeInput").value = '';
  } else {
    alert("Please enter something!");
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
