const product = document.querySelectorAll(".products-card");
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

for (item of product) {
  item.addEventListener("mousemove", (event) => {
    let mark = event.target.closest(".products-card");
    showMark(mark);
  });
}

for (item of product) {
  item.addEventListener("mouseout", (event) => {
    let mark = event.target.closest(".products-card");
    hideMark(mark);
  });
}

for (item of favouriteMark) {
  item.addEventListener("click", (event) => {
    let mark = event.target.closest(".products-card");
    handlerMark(mark);
  });
}
