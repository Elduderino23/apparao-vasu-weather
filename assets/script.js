// var APIKey = cf1929056b460b4693a80b30482c21ed
// var city;
// var dayOne
// var dayTwo
// var dayThree
// var dayFour
// var dayFive
var fetchButton = document.getElementById('fetch-city')
$(document).ready(function () {
    var weatherClock = function () {
        var presentClock = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
        $("#presentDay").text(presentClock)
    }
    setInterval(weatherClock, 1000)
})
var city = document.getElementById("city").value
console.log(city)

function retrieveAPI() {
    var city = document.getElementById("city").value
    console.log(city)
    var requestSite = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=cf1929056b460b4693a80b30482c21ed&units=imperial'

    fetch(requestSite)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)
            for (let i = 0; i < 5; i++) {
                renderForecastCard(data.list[i], i) 
             }

            var lon = data.city.coord.lon
            var lat = data.city.coord.lat
            var requestNew = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=cf1929056b460b4693a80b30482c21ed&units=imperial'

            fetch(requestNew)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    renderOriginForecastCard(data)
                    console.log(data)
                    // weather.textContent = data.main.temp
                    // for (let i = 0; i < 5; i++) {
                    //    renderForecastCard(data.list[i]) 
                    // }
                    
                })

                // var dayOne = moment().add(1,'days').format("MMM Do YY") 
// var dayTwo = moment().add(2,'forecast-2').format("MMM Do YY")
// var dayThree = moment().add(3,'forecast-3').format("MMM Do YY")
// var dayFour = moment().add(4,'forecast-4').format("MMM Do YY")
// var dayFive = moment().add(5,'forecast-5').format("MMM Do YY")
/* <link src="http://openweathermap.org/img/wn/10d@2x.png". */
                
        })
}

function renderOriginForecastCard(todayWeather){
    console.log(todayWeather)
    var dayOne = moment().format("MMM Do YY") 
var forecastListE0 = document.getElementById("weather")
var cardOneHTML = `
<div class="card">
  <div class="card-body">
  <p class="card-text">${dayOne}</p>
  <p class="card-text">${document.getElementById("city").value}</p>
  <img class="card-title"src=${"http://openweathermap.org/img/wn/"+todayWeather.weather[0].icon+"@2x.png"}
    <p class="card-text">temp: ${todayWeather.main.temp}</p>
    <p class="card-text">wind speed: ${todayWeather.wind.speed}</p>
    <p class="card-text">wind gust: ${todayWeather.wind.gust}</p>
    <p class="card-text">humidity: ${todayWeather.main.humidity}</p>
  </div>
</div>
`
var listItemOne = document.createElement("li")
listItemOne.innerHTML=cardOneHTML
forecastListE0.appendChild(listItemOne)
}
// document.getElementById("city").value
function renderForecastCard(weatherObject,i){
    console.log(weatherObject)
    var dayNext = moment().add(i+1,'days').format("MMM Do YY") 
var forecastListEl = document.getElementById("js-forecast-list")
var cardHTML = `
<div class="card">
  <div class="card-body">
  <p class="card-text">${dayNext}</p>
  <p class="card-text">${document.getElementById("city").value}</p>
    <img class="card-title"src=${"http://openweathermap.org/img/wn/"+weatherObject.weather[0].icon+"@2x.png"}>
    <p class="card-text">temp: ${weatherObject.main.temp}</p>
    <p class="card-text">wind speed: ${weatherObject.wind.speed}</p>
    <p class="card-text">wind gust: ${weatherObject.wind.gust}</p>
    <p class="card-text">humidity: ${weatherObject.main.humidity}</p>
  </div>
</div>
`
var listItem = document.createElement("li")
listItem.innerHTML=cardHTML
forecastListEl.appendChild(listItem)
}
// var day1 = moment().add(1,'day').format("MMM Do YY")
// var day2 = moment().add(2,'day').format("MMM Do YY")
// function renderForecastCard(todayWeatherObject){
//     console.log(todayWeatherObject)
// var forecastListEl = document.getElementById("fetch-weather")
// var cardHTML = `
// <div class="card">
//   <div class="card-body">
//     <h5 class="card-title">temp: ${todayWeatherObject.main.temp}>
//     <p class="card-text">temp: ${todayWeatherObject.main.temp}</p>
//     <p class="card-text">wind speed: ${todayWeatherObject.wind.speed}</p>
//     <p class="card-text">wind gust: ${todayWeatherObject.wind.gust}</p>
//     <p class="card-text">humidity: ${todayWeatherObject.main.humidity}</p>
//   </div>
// </div>
// `
// var listItem = document.createElement("li")
// listItem.innerHTML=cardHTML
// forecastListEl.appendChild(listItem)
// }
// $("#fetch-city").on.("click" "submit", )
$(".search").on("click", function(){
    var id = $(this).attr("id")
    console.log(id.split("-")[1])
    var text = $("#fetch-city"+(id.split("-")[1])).val()
    console.log(text)
    localStorage.setItem(id,text)
  })

fetchButton.addEventListener('click', retrieveAPI)

// cf1929056b460b4693a80b30482c21ed
// f64f9e2d4fda40afd330c539b14a2d45
// ${src="http://openweathermap.org/img/wn/"+weatherObject.list[0].weather[0].icon+"@2x.png"}
// http://openweathermap.org/img/wn/10d@2x.png