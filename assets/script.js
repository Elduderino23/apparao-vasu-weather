$(document).ready(function () {
    var weatherClock = function () {
        var presentClock = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
        $("#presentDay").text(presentClock)
    }









    setInterval(weatherClock, 1000)
})