const productCard = document.querySelectorAll(".products-card");
const popupBody = document.querySelector(".popup--body");
const popup = document.querySelector(".popup");
const popupText = document.querySelector(".popup--text");
const popupImg = document.querySelector(".popup--img");

for (item of productCard) {
  item.addEventListener("click", (event) => {
    if (event.target.tagName === "svg" || event.target.tagName === "use")
      return;
    popup.classList.add("open");
    document.body.style.overflow = "hidden";
    let card = event.target.closest(".products-card");
    popupText.innerHTML = card.children[2].children[0].innerHTML;
    popupImg.innerHTML = card.children[1].innerHTML;
  });
}

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
