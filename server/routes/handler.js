const express = require("express");
const https = require("https");
const requestIp = require("request-ip");
const geoip = require("geoip-lite");

require("dotenv").config();
const app = express();

const apiKey = process.env.API_KEY;
const units = process.env.UNITS;
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";


app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const ipAddress = requestIp.getClientIp(req);
  const geo = geoip.lookup(ipAddress);
  let city = geo ? geo.city : process.env.DEFAULT_CITY;
  
  const getData = apiEndpoint + encodeURIComponent(city) + "&units=" + units + "&appid=" + apiKey;

  https.get(getData, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      res.send(weatherData);
    })
  })
});

app.post("/", (req, res) => {
  const query = req.body.searchCity;
  const apiURL = apiEndpoint + query + "&units=" + units + "&appid=" + apiKey;
  
  https.get(apiURL, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      res.send(weatherData);
    });
  });
});

module.exports = app;