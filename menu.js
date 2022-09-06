let hamburger = document.querySelector(".hamburger1");
let nav_menu = document.querySelector(".desktop-nav");
let hamburger1 = document.querySelector("hamburger");
let close = document.querySelector(".close")

hamburger.addEventListener('click', () => { 
  nav_menu.classList.toggle("display");
  hamburger.classList.toggle("hidden");
  document.body.style.overflow = 'hidden';
}); 

close.addEventListener('click', () => { 
  nav_menu.classList.toggle("display");
  hamburger.classList.toggle("hidden");
  document.body.style.overflow = "auto";
}); 