import React from "react";
import _ from "lodash";

function Details(props) {
  const { main: details, wind, clouds } = props.weatherData;
  
  const detailArr = Object.keys(details).map((key) => {
    return (
      <tr key={key}>
        <th className="detailName">{_.toUpper(_.replace(key, "_", " "))}</th>
        <th className="detailValue">{details[key]}</th>
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
