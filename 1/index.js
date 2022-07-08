const lyrics = document.querySelector(".lyrics");

function handler(event) {
  if ((event.target.tagName = "SPAN")) {
    alert(event.target.innerText);
  }
}

lyrics.addEventListener("click", handler);
