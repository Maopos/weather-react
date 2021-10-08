import React, { useState } from "react";
import "./styles.css";
import Error from "./Error";
import PropTypes from 'prop-types';

const Form = ({ search, saveSearch, saveConsult }) => {
  const [error, saveError] = useState(false);

  const { city, country } = search;

  // set state elements
  const handleChange = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (city.trim() === "" || country.trim() === "") {
      saveError(true);
      return;
    }

    saveError(false);

    // send to show Component
    saveConsult(true);

  };
  let component;
  if (error) {
    component = <Error message="All fields are required..."/>
  }

  return (
    <div>
      <br />
      <br />
      
      <form onSubmit={handleSubmit}>
        {component}
        <div className="input-field col s12">
          <select
            name="country"
            id="country"
            value={country}
            onChange={handleChange}
          >
            <option value="">-- Select Country --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="country">Country:</label>
        </div>
        <br />
        <br />
        

        <div className="input-field col s12">
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={handleChange}
          />
          <label htmlFor="city">City:</label>
          <br />
          <br />
          
        </div>
        <div className="input-field col s12">
          <button
            type="submit"
            className="waves-effect waves-light btn-large btn-block deep-green accent-4 col s12"
          >
            Show me the Weather...
          </button>

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  saveConsult: PropTypes.func.isRequired,
  saveSearch: PropTypes.func.isRequired,
};

export default Form;
