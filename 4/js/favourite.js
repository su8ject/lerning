const product = document.querySelector(".galery");
const favouriteMark = document.querySelectorAll(".favourite-mark");
let favouriteName = [];

if (JSON.parse(localStorage.getItem("favouriteName"))) {
  favouriteName = JSON.parse(localStorage.getItem("favouriteName"));
}

const showMark = (name) => {
  name.children[0].classList.add("block");
};

const hideMark = (name) => {
  if (name.children[0].classList.contains("temp")) return;
  name.children[0].classList.remove("block");
};

const handlerMark = (name) => {
  name.children[0].classList.toggle("temp");
  let productName = name.children[2].children[0].innerHTML;
  if (favouriteName.includes(productName)) {
    favouriteName = favouriteName.filter((name) => {
      return name !== productName;
    });
  } else {
    favouriteName.push(name.children[2].children[0].innerHTML);
  }
  localStorage.setItem("favouriteName", JSON.stringify(favouriteName));
};

product.addEventListener("mousemove", (event) => {
  if (
    event.target.className === "products-card" ||
    event.target.className === "card-name--text" ||
    event.target.className === "card-name--price" ||
    event.target.className === "card--img" ||
    event.target.tagName === "svg"
  ) {
    let mark = event.target.closest(".products-card");
    showMark(mark);
  }
});

product.addEventListener("mouseout", (event) => {
  if (
    event.target.className === "products-card" ||
    event.target.className === "card-name--text" ||
    event.target.className === "card-name--price" ||
    event.target.className === "card--img"
  ) {
    let mark = event.target.closest(".products-card");
    hideMark(mark);
  }
});

product.addEventListener("click", (event) => {
  if (event.target.tagName === "svg" || event.target.tagName === "use") {
    let mark = event.target.closest(".products-card");
    handlerMark(mark);
  }
});
