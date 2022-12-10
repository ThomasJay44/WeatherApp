var searchBtn = document.querySelector("#btn");
var cityName = document.querySelector("#city-input");
// var city = cityName.value().trim();
console.log(searchBtn);
// console.log(cityName);
function returnData() {
  event.preventDefault();

  var city = cityName.value.trim();
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=e72f31e0a34db7aed5d48ea56c89d35d`;
  
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    console.log(res);
    ////////////////////////////////////////////////////
 
    var day1Div = $("#day1");
    var day1Date = res.list[0].dt_txt;
    var day1DateText = $("<h1>").text(`${day1Date}`);
    day1Div.append(day1DateText);
    var day1Temp = res.list[0].main.temp;
    var day1TempText = $("<p>").text(`${day1Temp}`);
    day1Div.append(day1TempText);
    var day1Wind = res.list[0].wind.speed;
    var day1WindText = $("<p>").text(`${day1Wind}`);
    day1Div.append(day1WindText);
    var day1Hum = res.list[0].main.humidity;
    var day1HumText = $("<p>").text(`${day1Hum}`);
    day1Div.append(day1HumText);
    //////////////////////////////////////////////////////////////
    var day2Div = $("#day2");
    var day2Date = res.list[1].dt_txt;
    var day2DateText = $("<h1>").text(`${day2Date}`);
    day2Div.append(day2DateText);
    var day2Temp = res.list[1].main.temp;
    var day2TempText = $("<p>").text(`${day2Temp}`);
    day2Div.append(day2TempText);
    var day2Wind = res.list[1].wind.speed;
    var day2WindText = $("<p>").text(`${day2Wind}`);
    day2Div.append(day2WindText);
    var day2Hum = res.list[1].main.humidity;
    var day2HumText = $("<p>").text(`${day2Hum}`);
    day2Div.append(day2HumText);
    ////////////////////////////////////////////////////////////
    var day3Div = $("#day3");
    var day3Date = res.list[2].dt_txt;
    var day3DateText = $("<h1>").text(`${day3Date}`);
    day3Div.append(day3DateText);
    var day3Temp = res.list[2].main.temp;
    var day3TempText = $("<p>").text(`${day3Temp}`);
    day3Div.append(day3TempText);
    var day3Wind = res.list[2].wind.speed;
    var day3WindText = $("<p>").text(`${day3Wind}`);
    day3Div.append(day3WindText);
    var day3Hum = res.list[2].main.humidity;
    var day3HumText = $("<p>").text(`${day3Hum}`);
    day3Div.append(day3HumText);
    ///////////////////////////////////////////////////////////////
    var day4Div = $("#day4");
    var day4Date = res.list[3].dt_txt;
    var day4DateText = $("<h1>").text(`${day4Date}`);
    day4Div.append(day4DateText);
    var day4Temp = res.list[3].main.temp;
    var day4TempText = $("<p>").text(`${day4Temp}`);
    day4Div.append(day4TempText);
    var day4Wind = res.list[3].wind.speed;
    var day4WindText = $("<p>").text(`${day4Wind}`);
    day4Div.append(day4WindText);
    var day4Hum = res.list[3].main.humidity;
    var day4HumText = $("<p>").text(`${day4Hum}`);
    day4Div.append(day4HumText);
    ///////////////////////////////////////////////////////////
    var day5Div = $("#day5");
    var day5Date = res.list[4].dt_txt;
    var day5DateText = $("<h1>").text(`${day5Date}`);
    day5Div.append(day5DateText);
    var day5Temp = res.list[4].main.temp;
    var day5TempText = $("<p>").text(`${day5Temp}`);
    day5Div.append(day5TempText);
    var day5Wind = res.list[4].wind.speed;
    var day5WindText = $("<p>").text(`${day5Wind}`);
    day5Div.append(day5WindText);
    var day5Hum = res.list[4].main.humidity;
    var day5HumText = $("<p>").text(`${day5Hum}`);
    day4Div.append(day5HumText);
    /////////////////////////////////////////////////////
    var day6Div = $("#day6");
    var day6Date = res.list[5].dt_txt;
    var day6DateText = $("<h1>").text(`${day6Date}`);
    day6Div.append(day6DateText);
    var day6Temp = res.list[5].main.temp;
    var day6TempText = $("<p>").text(`${day6Temp}`);
    day6Div.append(day6TempText);
    var day6Wind = res.list[5].wind.speed;
    var day6WindText = $("<p>").text(`${day6Wind}`);
    day6Div.append(day6WindText);
    var day6Hum = res.list[5].main.humidity;
    var day6HumText = $("<p>").text(`${day6Hum}`);
    day6Div.append(day6HumText);
  });
}

searchBtn.addEventListener("click", returnData);
