let mybutton = document.querySelector("#click");
mybutton.onclick = function () {
  if (mybutton.classList.contains("fa-bars-staggered")) {
    mybutton.classList.remove("fa-bars-staggered");
    mybutton.classList.add("fa-x")
  }
  else {
    mybutton.classList.add("fa-bars-staggered");
    mybutton.classList.remove("fa-x")
  }
}

ScrollReveal().reveal(".bref", { delay: 150 });
ScrollReveal().reveal(".bref", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".bref", { scale: 0.90 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});

ScrollReveal().reveal(".aboutGrid", { delay: 150 });
ScrollReveal().reveal(".aboutGrid", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".aboutGrid", { scale: 0.90 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});

ScrollReveal().reveal(".awardsGrid", { delay: 150 });
ScrollReveal().reveal(".awardsGrid", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".awardsGrid", { scale: 0.90 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});


ScrollReveal().reveal(".committeeGrid", { delay: 150 });
ScrollReveal().reveal(".committeeGrid", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".committeeGrid", { scale: 0.90 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});

ScrollReveal().reveal(".competitionsGrid", { delay: 150 });
ScrollReveal().reveal(".competitionsGrid", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".competitionsGrid", { scale: 0.90 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});

ScrollReveal().reveal(".allGrid", { delay: 150 });
ScrollReveal().reveal(".allGrid", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".allGrid", { scale: 0.90 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});

ScrollReveal().reveal(".cards", { delay: 150 });
ScrollReveal().reveal(".cards", { reset: true });
ScrollReveal({ distance: "60px" });
ScrollReveal().reveal(".cards", { scale: 0.90 });
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});


