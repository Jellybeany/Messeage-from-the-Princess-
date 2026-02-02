const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

// floating hearts
function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["💗", "💖", "💘", "💕", "💞"][Math.floor(Math.random() * 5)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (2 + Math.random() * 2) + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 4000);
}
setInterval(spawnHeart, 350);

// NO button behavior
noBtn.addEventListener("click", () => {
  noCount++;

  // make YES button bigger each time
  const scale = 1 + noCount * 0.18;
  yesBtn.style.transform = `scale(${scale})`;

  // move NO button around
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";

  // change NO text
  const lines = [
    "Are you sure? 😭",
    "Bubsy pls 😔",
    "Don't do me like that 💔",
    "Okay last chance 🥺",
    "You're breaking my heart 😵‍💫"
  ];
  noBtn.textContent = lines[Math.min(noCount, lines.length - 1)];
});

// YES button behavior
yesBtn.addEventListener("click", () => {
  // confetti if it loads (from the CDN in index.html)
  if (window.confetti) {
    confetti({ particleCount: 160, spread: 70, origin: { y: 0.6 } });
  }

  // go to yes page
  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 700);
});
