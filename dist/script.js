function openPopup(game) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  if (game === "portal1") {
    text.innerHTML = `
      <h2>Portal</h2>
      <p>Portal is a 2007 puzzle game by Valve focused on physics-based puzzle-solving.</p>
    `;
  } else if (game === "portal2") {
    text.innerHTML = `
      <h2>Portal 2</h2>
      <p>Portal 2 expands the original with new mechanics, story, and cooperative gameplay.</p>
    `;
  } else if (game === "valve") {
    text.innerHTML = `
	  <h1>Give yourself a cookie, you found the easter egg!</h1>
      <h2>Valve Corporation</h2>
      <p>Valve is a video game developer and digital distribution company founded in 1996.</p>
      <p>They created Steam, Half-Life, Portal, and many other iconic games.</p>
	  <img src="valve.jpg" alt="Valve logo" class="popup-logo">
    `;
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
