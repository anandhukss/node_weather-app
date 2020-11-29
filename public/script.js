var cityDiv = document.getElementById('city')
var iconDiv = document.getElementById('iconDiv')
var tempDiv = document.getElementById('temperature')
var detailsDiv = document.getElementById('details')
var timeDiv = document.getElementById('time')
const form = document.querySelector('form')
var locationData = document.getElementById('locationInput')
form.addEventListener('submit', (event) => {
    cityDiv.innerHTML = "<div class='spinner-border text-dark' role='status'><span class='sr-only'>Loading...</span></div>"

    event.preventDefault()
    

    fetch('http://localhost:3000/forecast?city=' + locationData.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                cityDiv.innerHTML = "<h2 style='color:#fafafa'>" + data.error + "</h2>"
                iconDiv.innerHTML = "";
                tempDiv.innerHTML = "";
                detailsDiv.innerHTML = "";
            }
            else {
                // console.log(data.weather)
                cityDiv.innerHTML = data.name+ " "+data.sys.country
                tempDiv.innerHTML = data.main.temp + " °C"
                iconDiv.innerHTML = "<img src=" + "'http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png' >"
                detailsDiv.innerHTML = '<p>' + data.weather[0].description + '</p>' + '<p>' + "Humidity:" + data.main.humidity + "%" + '</p>' + '<p>' + "Wind:" + data.wind.speed + 'km/h' + "</p>"




            }
        })
    })


})

