const productCard = document.querySelectorAll(".products-card");
const popupBody = document.querySelector(".popup--body");
const popup = document.querySelector(".popup");
const popupText = document.querySelector(".popup--text");
const popupImg = document.querySelector(".popup--img");
const galery2 = document.querySelector(".galery");

galery2.addEventListener("click", (event) => {
  if (
    event.target.className === "products-card" ||
    event.target.className === "card-name--text" ||
    event.target.className === "card-name--price" ||
    event.target.className === "card--img"
  ) {
    popup.classList.add("open");
    document.body.style.overflow = "hidden";
    let card = event.target.closest(".products-card");
    popupText.innerHTML = card.children[2].children[0].innerHTML;
    popupImg.innerHTML = card.children[1].innerHTML;
  }
});

popupBody.addEventListener("click", (event) => {
  if (
    event.target.className === "popup--cross" ||
    event.target.className === "popup--close" ||
    event.target.className === "popup--body"
  ) {
    popup.classList.remove("open");
    document.body.style.overflow = "visible";
  }
});
