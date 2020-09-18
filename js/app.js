const darkToggle = document.querySelector(".dark-toggle");
const lightToggle = document.querySelector(".light-toggle");
const body = document.body;
const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.replace("dark", theme);
}

darkToggle.addEventListener("click", (e) => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
});

lightToggle.addEventListener("click", (e) => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
});
