import React from "react";
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <div>
      <p className="red lighten-0 error">{message}</p>
    </div>
  );
};

Error.propTypes = {
    message: PropTypes.string.isRequired,
  };

export default Error;
/* All fields are required... */
