var APIKey = cf1929056b460b4693a80b30482c21ed
var city;

var fetchButton = document.getElementById('fetch-city')
$(document).ready(function () {
    var weatherClock = function () {
        var presentClock = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
        $("#presentDay").text(presentClock)
    }
function retrieveAPI(){
    var requestSite = 'https://api.openweathermap.org/data/2.5/weather?q={Fremont}&appid={cf1929056b460b4693a80b30482c21ed}'
    fetch(requestSite)
    .then(function (response) {
      return response.json();
    })
    .then(function (data)








    setInterval(weatherClock, 1000)
})

fetchButton.addEventListener('click', retrieve)