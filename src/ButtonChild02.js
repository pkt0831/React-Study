// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ButtonChild02 = ({ title, color }) => {
  const ButtonStyle = {
    border: 'none',
    width: 100,
    height: 30,
    background: color,
  };
  const handleButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log('Button Child02 클릭!');
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button style={ButtonStyle} onClick={handleButtonClick}>
      {title}
    </button>
  );
};

ButtonChild02.propTypes = {
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.number,
};

export default ButtonChild02;
