const mobileMenu = document.querySelector(".mobile-menu");
const hambl = document.querySelector(".hambl");
const mobileLink = document.querySelectorAll(".mobile-link");

const hamblHandler = (event) => {
  mobileMenu.classList.toggle("mobile-menu-active");
  for (item of mobileLink) {
    item.classList.toggle("mobile-menu--display--block");
  }
  mobileMenu.classList.contains("mobile-menu-active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");
};

hambl.addEventListener("click", hamblHandler);
