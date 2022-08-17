fetch("https://queenlyrain.backendless.app/api/data/tools")
  .then((response) => response.json())
  .then((result) => {
    const galery = document.querySelector(".galery");

    for (let key in result) {
      let favourite = JSON.parse(
        localStorage.getItem("favouriteName").includes(result[key].name)
      )
        ? "temp block"
        : "";
      let sold = !result[key].availability ? "sold" : "";
      galery.innerHTML += `
      <div class="products-card ${sold}">
        <svg class="favourite-mark ${favourite}">
          <use xlink:href="./img/sprite.svg#favourite-mark"></use>
        </svg>
        <div><img src="./img/products/${result[key].name}.jpg" class="card--img" /></div>
        <div class="card-name">
          <span class="card-name--text">${result[key].name}</span>
          <span class="card-name--price">${result[key].price}грн</span>
        </div>
      </div>`;
    }
  });
