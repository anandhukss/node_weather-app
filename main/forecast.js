const http = require('request')
const forecast = (city, callback) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&appid=a4487ed8466a5926b462a78ddeaa0363"+"&units=metric";
    http({ url: url, json: true }, (errorMessage, response) => {
        if (errorMessage) {
            callback("Unable to connect to weather service", undefined)
        }
        else if (response.body.cod == "404") {
            callback("City not found", undefined)
        }
        else {
            var kelvinT = parseFloat(response.body.main.temp)
            var celciusT = kelvinT - 273.15
            callback(undefined, response.body)


        }

    })

}
module.exports = {
    getWeather:forecast
}
