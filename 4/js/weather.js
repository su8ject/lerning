let request = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Vysoke,ua&appid=0ee482c5e03972f5357e59bee44e3b64"
)
  .then((response) => response.json())
  .then((result) => console.log(result));
