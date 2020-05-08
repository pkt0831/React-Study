/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

const ButtonStyle = {
  border: 'none',
  width: 100,
  height: 30,
  background: 'orange',
};

class ButtonChild01 extends Component {
  render() {
    // eslint-disable-next-line react/button-has-type
    // eslint-disable-next-line react/destructuring-assignment
    return <button style={ButtonStyle}>{this.props.title}</button>;
  }
}

export default ButtonChild01;
