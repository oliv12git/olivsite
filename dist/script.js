const messages = [
  "Initializing process...",
  "Loading sounds...",
  "Loading textures...",
  "Loading Zero Point Energy Field Manipulator...",
  "Loading Sandvich om nom nom...",
  "Initializing Source...",
  "Starting..."
];

let index = 0;
const line = document.getElementById("console-line");
const totalDuration = 3500; // matches loader duration
const interval = totalDuration / messages.length;

function updateConsole() {
  if (index < messages.length) {
    line.textContent = messages[index];
    index++;
    setTimeout(updateConsole, interval);
  }
}

updateConsole();

window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  const site = document.getElementById("site-content");

  setTimeout(() => {
    loader.style.opacity = "0"; // fade out
    site.style.opacity = "1";   // fade in
    setTimeout(() => { loader.style.display = "none"; }, 500);
  }, totalDuration);
});