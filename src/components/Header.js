import React from "react";
import './styles.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <nav>
      
      <div className="nav-wrapper teal darken-1"><a className="brand-logo center" href="#!">{title}</a></div>
      <br/>
    </nav>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
