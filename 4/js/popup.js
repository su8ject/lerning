const productCard = document.querySelectorAll(".products-card");
const closePopup = document.querySelectorAll(".popup--cross, .popup--close");

for (item of productCard) {
  item.addEventListener("click", (event) => {
    if (event.target.tagName === "svg" || event.target.tagName === "use")
      return;
    document.querySelector(".popup").classList.add("open");
    document.querySelector(".popup--text").innerHTML = "Мед травневий 0.5л";
    document.body.style.overflow = "hidden";
  });
}

for (item of closePopup) {
  item.addEventListener("click", (event) => {
    document.querySelector(".popup").classList.remove("open");
    document.body.style.overflow = "scroll";
  });
}
