const express = require("express");
const https = require("https");
const requestIp = require("request-ip");
const geoip = require("geoip-lite");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());

const apiKey = process.env.API_KEY;
const units = process.env.UNITS;
const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?units=${units}&appid=${apiKey}&q=`;

app.get("/", (req, res) => {
  const ipAddress = requestIp.getClientIp(req);
  const geo = geoip.lookup(ipAddress);
  let city = geo ? geo.city : process.env.DEFAULT_CITY;

  const apiURL = apiEndpoint + encodeURIComponent(city);

  https.get(apiURL, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      res.send(weatherData);
    });
  });
});

app.post("/", (req, res) => {
  const query = req.body.searchQuery;
  const apiURL = apiEndpoint + encodeURIComponent(query);

  https.get(apiURL, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      res.send(weatherData);
    });
  });
});

module.exports = app;
