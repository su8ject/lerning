const product = document.querySelectorAll(".products-card");
const favouriteMark = document.querySelectorAll(".favourite-mark");

onload = (event) => {};

const showMark = (name) => {
  name.children[0].classList.add("block");
};

const hideMark = (name) => {
  if (name.children[0].classList.contains("temp")) return;
  name.children[0].classList.remove("block");
};

const handlerMark = (name) => {
  name.children[0].classList.toggle("temp");
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
