import React from "react";

function Details() {
  return (
    <table>
      <thead>
        <tr>
          <th className="tableHead" colSpan={2}>
            Weather Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="detailName">Feels Like</th>
          <th className="detailValue">21°</th>
        </tr>
        <tr>
          <th className="detailName">Wind</th>
          <th className="detailValue">10km/hr</th>
        </tr>
        <tr>
          <th className="detailName">Humidity</th>
          <th className="detailValue">60%</th>
        </tr>
        <tr>
          <th className="detailName">Cloudy</th>
          <th className="detailValue">90%</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Details;