



function getWeather() {



    var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e72f31e0a34db7aed5d48ea56c89d35d`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
}



$('#btn').on('click', function() {
    getWeather();
    var items =[]
    var destination = $('#btn')
});