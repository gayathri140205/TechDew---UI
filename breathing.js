const breathText = document.getElementById("breath-text");
const cycleTime = 7000; // 7 seconds

function startBreathingCycle() {
  breathText.innerText = "Inhale...";

  setTimeout(() => {
    breathText.innerText = "Hold...";
  }, cycleTime / 3);

  setTimeout(() => {
    breathText.innerText = "Exhale...";
  }, (2 * cycleTime) / 3);
}

document.addEventListener("DOMContentLoaded", () => {
  startBreathingCycle();
  setInterval(startBreathingCycle, cycleTime);
});
