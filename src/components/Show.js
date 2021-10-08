import React from "react";
import PropTypes from "prop-types";

const Show = ({ result }) => {
  const { name, main, sys, weather, coord } = result;
  if (!name) return null;
  const kelvin = 273.15;
  return (
    <div className="container">
      <br />
      <br />
      <div className="card-panel teal darken-0 col s12">
        <div className="white-text">
          <h5>
            {name}, {sys.country}
          </h5>
          <h6>
            lat: {coord.lat}, lon: {coord.lon}
          </h6>
          <h6>{weather[0].description}</h6>
          <p>
            Temp: {(main.temp - kelvin).toFixed(2)} ℃<br />
            Max Temp: {(main.temp_max - kelvin).toFixed(2)} ℃<br />
            Min Temp: {(main.temp_min - kelvin).toFixed(2)} ℃
          </p>
        </div>
      </div>
    </div>
  );
};

Show.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Show;
