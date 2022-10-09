// var APIKey = cf1929056b460b4693a80b30482c21ed
// var city;
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
    var requestSite = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=cf1929056b460b4693a80b30482c21ed'

    fetch(requestSite)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)

            var lon = data.coord.lon
            var lat = data.coord.lat
            var requestNew = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=cf1929056b460b4693a80b30482c21ed'

            fetch(requestNew)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                })
        })
}

fetchButton.addEventListener('click', retrieveAPI)

// cf1929056b460b4693a80b30482c21ed
// f64f9e2d4fda40afd330c539b14a2d45