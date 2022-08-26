const nameItems = {};

try {
  fetch(`${baseUrl}/items`)
    .then((response) => response.json())
    .then((result) => {
      const gallaryCards = result.map((item) => createCard(item));

      result.map((item) => (nameItems[item.name] = item.description));

      gallery.innerHTML = gallaryCards.join("\n");
    })
    .then(() => {
      const mask = document.querySelector(".mask");
      const html = document.querySelector("html")
      mask.remove();
      html.classList.add("active")
    });
} catch (e) {
  gallery.innerHTML = createError();
}
