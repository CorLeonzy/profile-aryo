function showMessage() {
  document.getElementById("message").innerText = "✨ Terima kasih sudah mengunjungi! ✨";
}

// Toggle Dark/Light Mode
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});
