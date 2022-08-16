document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
  if (!xDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;

  let xDiff = xDown - xUp;

  if (Math.abs(xDiff)) {
    if (xDiff > 0) {
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
    } else {
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
    }
  }
  xDown = null;
}
