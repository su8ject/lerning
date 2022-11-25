document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
const curUrl = document.URL;

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
      if (curUrl.includes("index.html"))
        document.location.href = "./products-honey.html";
      if (curUrl.includes("delivery.html"))
        document.location.href = "./index.html";
      if (curUrl.includes("products-remanent.html"))
        document.location.href = "./delivery.html";
      if (curUrl.includes("products-honey.html"))
        document.location.href = "./products-remanent.html";
    } else {
      if (curUrl.includes("index.html"))
        document.location.href = "./delivery.html";
      if (curUrl.includes("delivery.html"))
        document.location.href = "./products-remanent.html";
      if (curUrl.includes("products-remanent.html"))
        document.location.href = "./products-honey.html";
      if (curUrl.includes("products-honey.html"))
        document.location.href = "./index.html";
    }
  }
  xDown = null;
}
