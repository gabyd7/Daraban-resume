const buton = document.getElementById("toggleMode");

// Aplicăm modul salvat
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark-mode");
  buton.textContent = "☀️ Mod luminos";
}

buton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    buton.textContent = "☀️ Mod luminos";
    localStorage.setItem("tema", "dark");
  } else {
    buton.textContent = "🌙 Mod întunecat";
    localStorage.setItem("tema", "light");
  }
});
