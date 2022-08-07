fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Vysoke,ua&appid=0ee482c5e03972f5357e59bee44e3b64"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });
