const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

// --- Floating hearts (overlay, won't push layout) ---
function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["💗", "💖", "💘", "💕", "💞"][Math.floor(Math.random() * 5)];

  // Anywhere across the screen
  h.style.left = Math.random() * 100 + "vw";

  // Random size
  h.style.fontSize = (14 + Math.random() * 20) + "px";

  // Random fall speed
  h.style.animationDuration = (2.8 + Math.random() * 2.8) + "s";

  // Slight random sideways drift
  h.style.transform = `translateX(${(Math.random() * 40 - 20).toFixed(0)}px)`;

  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6500);
}
setInterval(spawnHeart, 250);

// --- NO button behavior ---
noBtn.addEventListener("click", () => {
  noCount++;

  // Make YES bigger each time
  const scale = 1 + noCount * 0.18;
  yesBtn.style.transform = `scale(${scale})`;

  // Make NO run away
  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";

  const lines = [
    "Are you sure? 😭",
    "Bubsy pls 😔",
    "Don't do me like that 💔",
    "Okay last chance 🥺",
    "You're breaking my heart 😵‍💫"
  ];
  noBtn.textContent = lines[Math.min(noCount, lines.length - 1)];
});

// --- YES button behavior ---
yesBtn.addEventListener("click", () => {
  if (window.confetti) {
    confetti({ particleCount: 160, spread: 70, origin: { y: 0.6 } });
  }
  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 700);
});
