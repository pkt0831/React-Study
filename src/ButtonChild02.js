/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

const ButtonStyle = {
  border: 'none',
  width: 100,
  height: 30,
  background: 'yellow',
};

const ButtonChild02 = (props) => (
  <button style={ButtonStyle}>{props.title}</button>
);

export default ButtonChild02;
