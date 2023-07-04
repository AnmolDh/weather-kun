import React from "react";
import _ from "lodash";

function Details(props) {
  // Destructure the weatherData object
  let {
    main: details,
    wind: { speed: wind },
    clouds: { all: clouds },
  } = props.weatherData;
  details = { ...details, wind, clouds };

  // Define units for each weather detail
  const units = {
    temp: "°C",
    feels_like: "°C",
    temp_min: "°C",
    temp_max: "°C",
    pressure: "hPa",
    humidity: "%",
    wind: "m/s",
    clouds: "%",
    sea_level: "hPa",
    grnd_level: "hPa",
  };

  // Map over the "details" object and create a table row for each detail
  const detailArr = Object.keys(details).map((key) => {
    return (
      <tr key={key}>
        <th className="detailName">{_.toUpper(_.replace(key, "_", " "))}</th>
        <th className="detailValue">
          {details[key]} <span className="units">{units[key] || ""}</span>
        </th>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th className="tableHead" colSpan={2}>
            Weather Details
          </th>
        </tr>
      </thead>
      <tbody>{detailArr}</tbody>
    </table>
  );
}

export default Details;
