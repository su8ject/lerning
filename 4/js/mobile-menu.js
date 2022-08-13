const mobileMenu = document.querySelector(".mobile-menu");
const hambl = document.querySelector(".hambl");
const hamblLine = document.querySelectorAll(".hambl-line");
const mobileLink = document.querySelectorAll(".mobile-link");

const hamblHandler = (event) => {
  hambl.classList.toggle("active");
  mobileMenu.classList.toggle("mobile-menu-active");

  mobileMenu.classList.contains("mobile-menu-active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
};

hambl.addEventListener("click", hamblHandler);
