document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", startExperience);
  document.getElementById("random-number-btn").addEventListener("click", showRandomNumber);
  document.getElementById("reverse-message-btn").addEventListener("click", reverseBirthdayMessage);
  document.getElementById("emoji-art-btn").addEventListener("click", generateEmojiArt);
  document.getElementById("useless-fact-btn").addEventListener("click", showUselessFact);
  document.getElementById("riddle-btn").addEventListener("click", showRiddle);
  document.getElementById("photo1-btn").addEventListener("click", () => displayPhoto('pic(1).png'));
  document.getElementById("photo2-btn").addEventListener("click", () => displayPhoto('pic(2).png'));
});

function displayPhoto(photoSrc) {
  const photo = document.getElementById("photo");
  photo.src = photoSrc;
  photo.style.display = "block";
  document.getElementById("output").textContent = "";
}
