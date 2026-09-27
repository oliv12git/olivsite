"use strict";

// The page works without JavaScript. These are optional enhancements only.
const avatar = document.getElementById("steam-avatar");

if (avatar) {
  const hideBrokenAvatar = () => {
    avatar.hidden = true;
  };

  avatar.addEventListener("error", hideBrokenAvatar, { once: true });

  // A cached failure can occur before this deferred script runs.
  if (avatar.complete && avatar.naturalWidth === 0) {
    hideBrokenAvatar();
  }
}

const copyButton = document.getElementById("copy-steam");
const copyStatus = document.getElementById("copy-status");
const steamName = document.getElementById("profile-heading");

if (copyButton && copyStatus && steamName && navigator.clipboard?.writeText) {
  copyButton.hidden = false;

  copyButton.addEventListener("click", async () => {
    copyButton.disabled = true;
    copyStatus.textContent = "";

    try {
      await navigator.clipboard.writeText(steamName.textContent.trim());
      copyStatus.textContent = "Copied!";
    } catch {
      copyStatus.textContent = "Couldn’t copy. Select the name above to copy it manually.";
    } finally {
      copyButton.disabled = false;
    }
  });
}
