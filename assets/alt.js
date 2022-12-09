
var foundWeather = [
  {
    date: "",
    temp: "",
    icon: "",
    wind: "",
    humidity: "",
  },
  {
    date: "",
    temp: "",
    icon: "",
    wind: "",
    humidity: "",
  },
  {
    date: "",
    temp: "",
    icon: "",
    wind: "",
    humidity: "",
  },
  {
    date: "",
    temp: "",
    icon: "",
    wind: "",
    humidity: "",
  },
  {
    date: "",
    temp: "",
    icon: "",
    wind: "",
    humidity: "",
  },
  {
    date: "",
    temp: "",
    icon: "",
    wind: "",
    humidity: "",
  },
];

function getWeather() {
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e72f31e0a34db7aed5d48ea56c89d35d`;
  $.ajax({
    url: weatherURL,
    method: "GET",
  }).then(function (res) {
    for (i = 0; i < 6; i++)
      [
        (foundWeather[i].date = res.list[i].dt_txt),
        (foundWeather[i].temp = res.list[i].main.temp),
        (foundWeather[i].icon = res.list[i].weather[0].icon),
        (foundWeather[i].wind = res.list[i].wind.speed),
        (foundWeather[i].humidity = res.list[i].main.humidity),
      ];
  });
}

getWeather("Newark");
console.log(foundWeather);

function forecast() {
  for (i = 0; i < foundWeather.length; i++) {
    $(`#day-${i + 1}`).children();
  }
}
