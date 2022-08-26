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
      <div><img src="${item.imageUrl}" class="card--img" /></div>
        <div class="card-name">
          <span class="card-name--text">${item.name}</span>
          <span class="card-name--price">${item.price}грн</span>
        </div>
      </div>`;
};

const createError = () =>
  `<p class="card-name--text">Технічні проблеми, перезавантажте, будь ласка, сторінку.</p>`;
