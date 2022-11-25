const nameItems = {};

try {
  fetch(`${baseUrl}/tools`)
    .then((response) => response.json())
    .then((result) => {
      const gallaryCards = result.map((item) => createCard(item));

      result.map((item) => (nameItems[item.name] = item.description));

      gallery.innerHTML = gallaryCards.join("\n");
    })
    .then(() => {
      const loader = document.querySelector(".loader");
      loader.remove();
    });
} catch {
  gallery.innerHTML = createError();
}
