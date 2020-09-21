const darkToggle = document.querySelector(".dark-toggle");
const lightToggle = document.querySelector(".light-toggle");
const body = document.body;
const theme = localStorage.getItem("theme");
const firstTime = localStorage.getItem("first");
const tl = gsap.timeline({ defaults: { duration: 1 } });

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

// Probably i will use JQUERY to simplifie things hehe

tl.to(".hide", { duration: 1.5, y: 50 });
tl.to(".hide", { duration: 1, y: 100 });
tl.to(".hide", { duration: 1.5, y: -50 }, "+=1");
tl.to(".intro", { duration: 3, y: "-100%" }, "-=.3");

// if (!firstTime) {
//   tl.to(".hide", { duration: 1.5, y: 100 });
//   tl.to(".hide", { duration: 1, y: -50 });
//   tl.to(".intro", { duration: 3, y: -1000 });
//   localStorage.setItem("first", false);
// }
// tl.to(".intro", { duration: 5, y: -1000 });
