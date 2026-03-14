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

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 3500);

});