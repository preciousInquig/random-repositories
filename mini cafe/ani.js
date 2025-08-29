// Coffee Steam Effect
function createSteam() {
  const steamContainer = document.getElementById("steam-container");
  const steam = document.createElement("div");
  steam.classList.add("steam");

  // Random horizontal position inside hero section
  steam.style.left = Math.random() * 80 + 10 + "%";

  // Random delay & duration for variety
  steam.style.animationDuration = (Math.random() * 2 + 3) + "s";
  
  steamContainer.appendChild(steam);

  // Remove after animation ends
  setTimeout(() => {
    steam.remove();
  }, 5000);
}

// Create steam every 600ms
setInterval(createSteam, 600);
