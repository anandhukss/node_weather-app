const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const forecast = require('./forecast');




const directory = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../partials');


hbs.registerPartials(partialsPath);
console.log(partialsPath)
app.set('view engine', 'hbs');

app.use(express.static(directory));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather app"
    })
})

app.get('/forecast', (req, res) => {
    if (!req.query.city) {
        return res.send({ error: "Please provide a location" })
    }
    else {
        forecast.getWeather(req.query.city, (e, data) => {
            if (e) {
                res.send({ error: e })
            }
            else {
                res.send(data)
            }
        })
    }

})
app.get('/*', (req, res)=>{
    res.send("404 page not found")
})

app.listen(3000, () => console.log("Server is up"))