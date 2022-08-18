const baseUrl = "https://queenlyrain.backendless.app/api/data";

const getIsFavourite = (key) =>
  JSON.parse(localStorage.getItem("favouriteName").includes(key));

const createCard = (item) => {
  const isFavourite = getIsFavourite(item.name);
  const isAvailable = item.availability;

  return `<div class="products-card ${isAvailable ? "" : "sold"}">
        <svg class="favourite-mark ${isFavourite ? "temp block" : ""}">
          <use xlink:href="./img/sprite.svg#favourite-mark"></use>
        </svg>
      <div><img src="./img/products/${item.name}.jpg" class="card--img" /></div>
        <div class="card-name">
          <span class="card-name--text">${item.name}</span>
          <span class="card-name--price">${item.price}грн</span>
        </div>
      </div>`;
};

try {
  fetch(`${baseUrl}/tools`)
    .then((response) => response.json())
    .then((result) => {
      const gallery = document.querySelector(".galery"); // getElementById

      const gallaryCards = result.map((item) => createCard(item));

      gallery.innerHTML = gallaryCards.join("\n");
    });
} catch (e) {
  console.log(`Error: ${e.code} --- ${e.message}`);
}
