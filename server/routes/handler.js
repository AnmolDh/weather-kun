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
  // const ipAddress = requestIp.getClientIp(req);
  const ipAddress = "207.97.227.239";
  const { city, country } = geoip.lookup(ipAddress);
  
  const getData = apiEndpoint + encodeURIComponent(city) + "&appid=" + apiKey + "&units=" + units;

  https.get(getData, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      res.send(weatherData);
    })
  })
});

app.post("/", (req, res) => {
  const query = req.body.searchCity;
  const apiURL = apiEndpoint + query + "&appid=" + apiKey + "&units=" + units;
  
  https.get(apiURL, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      res.send(weatherData);
    });
  });
});

module.exports = app;