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

// Handle GET requests to the root URL
app.get("/", (req, res) => {
  // Get the client's IP address and use it to determine their geo-location
  const ipAddress = requestIp.getClientIp(req);
  const geo = geoip.lookup(ipAddress);

  // construct the API URL for the Geo-Location
  const city = geo ? geo.city : process.env.DEFAULT_CITY;
  const apiURL = apiEndpoint + encodeURIComponent(city);

  // fallback API URL if IP Geo-Location is not found in OpenWeatherMap API
  const fallbackCity = process.env.DEFAULT_CITY;
  const fallbackApiURL = apiEndpoint + encodeURIComponent(fallbackCity);

  // Make a request to the OpenWeatherMap API
  https.get(apiURL, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);

      // If the OpenWeatherMap API return 404 error, try again with fallback URL
      if (weatherData.cod === "404") {
        https.get(fallbackApiURL, (response) => {
          response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            res.send(weatherData);
          });
        });
      } else {
        // If the OpenWeatherMap API returns valid JSON data, send it to the client
        res.send(weatherData);
      }
    });
  });
});

// Handle POST requests to the root URL
app.post("/", (req, res) => {
  // Get the search query from the request body and construct the API URL
  const query = req.body.searchQuery;
  const apiURL = apiEndpoint + encodeURIComponent(query.trim());

  // Make a request to OpenWeatherMap API for the search query
  https.get(apiURL, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      // If the OpenWeatherMap API returns a 404 error, send a custom error response
      if (weatherData.cod === "404") {
        const notFound = {
          name: "City Not Found",
          weather: "N/a",
          main: "N/a",
          wind: "N/a",
          clouds: "N/a",
        };
        res.send(notFound);
      } else {
        // Otherwise, send the weather data as the response
        res.send(weatherData);
      }
    });
  });
});

module.exports = app;
