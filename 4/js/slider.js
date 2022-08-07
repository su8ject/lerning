const slider = document.querySelector("body");
let startPoint;
let moved = false;
function touch(e) {
  e.preventDefault();
  startPoint = e.changedTouches[0].pageX;
}
function move(e) {
  if (moved) {
    return;
  }
  e.preventDefault();
  if (e.changedTouches[0].pageX > startPoint + slider.offsetWidth / 4) {
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/index.html"
    ) {
      window.location.href = "./delivery.html";
    }
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/delivery.html"
    ) {
      window.location.href = "./products-remanent.html";
    }
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/products-remanent.html"
    ) {
      window.location.href = "./products-honey.html";
    }
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/products-honey.html"
    ) {
      window.location.href = "./index.html";
    }
    moved = true;
  }
  if (e.changedTouches[0].pageX < startPoint - slider.offsetWidth / 4) {
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/index.html"
    ) {
      window.location.href = "./products-honey.html";
    }
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/delivery.html"
    ) {
      window.location.href = "./index.html";
    }
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/products-remanent.html"
    ) {
      window.location.href = "./delivery.html";
    }
    if (
      window.location.href ===
      "http://" + window.location.host + "/4/products-honey.html"
    ) {
      window.location.href = "./products-remanent.html";
    }
    moved = true;
  }
}
slider.addEventListener("touchmove", move);
slider.addEventListener("touchstart", touch);
slider.addEventListener("touchend", () => {
  setTimeout(() => {
    moved = !moved;
  }, 200);
});
