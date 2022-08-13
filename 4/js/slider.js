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
  if (e.changedTouches[0].pageX > startPoint + document.body.offsetWidth / 4) {
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
  if (e.changedTouches[0].pageX < startPoint - document.body.offsetWidth / 4) {
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
document.addEventListener("touchmove", move, { passive: false });
document.addEventListener("touchstart", touch, { passive: false });
document.addEventListener("touchend", () => {
  setTimeout(() => {
    moved = !moved;
  }, 200);
});
