const hamburger = document.querySelector(".hamburger1");
const navMenu = document.querySelector(".desktop-nav");
// const hamburger1 = document.querySelector('hamburger');
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("display");
  hamburger.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  navMenu.classList.toggle("display");
  hamburger.classList.toggle("hidden");
  document.body.style.overflow = "auto";
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.toggle("display");
    hamburger.classList.toggle("hidden");
    document.body.style.overflow = "auto";
  })
);
