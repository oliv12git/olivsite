const messages = [
  "Initializing engine...",
  "Loading materials...",
  "Loading shaders...",
  "Loading models...",
  "Loading textures...",
  "Initializing client...",
  "Starting game..."
];

let index = 0;

function updateConsole() {
  const line = document.getElementById("console-line");

  if (index < messages.length) {
    line.textContent = messages[index];
    index++;
    setTimeout(updateConsole, 500);
  }
}

updateConsole();

window.addEventListener("load", () => {

  const loader = document.getElementById("loading-screen");
  const site = document.getElementById("site-content");

  setTimeout(() => {
    loader.style.display = "none";
    site.style.opacity = "1";
  }, 3500);

});